import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await connectDB();

        const {email, password} = await req.json();

        if(!email || !password) {
            return NextResponse.json({message: "All fields are required"}, {status: 400});
        }

        const userExists = await User.findOne({email});

        if(!userExists) {
            return NextResponse.json({message: "User does not exists"}, {status: 400});
        }

        const passwordMatch = await bcrypt.compare(password, userExists.password);

        if(!passwordMatch) {
            return NextResponse.json({message: "Incorrect password"}, {status: 400});
        }

        const user = await User.findOne({email}).select("-password");

        // create jwt token and set in cookie

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET as string, {expiresIn: "1d"});

        res.cookies.set("_bridge_access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24
        });

        return NextResponse.json({message:"User logged in successfully", user}, {status: 200});
        
    } catch (error) {
        console.log(`Error while logging in user: ${error}`);
        return NextResponse.json({message: "Error while logging in user"}, {status: 500});
    }
}