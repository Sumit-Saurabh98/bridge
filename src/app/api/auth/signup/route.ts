import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await connectDB();

        const {fullname, email, password} = await req.json();

        if(!fullname || !email || !password) {
            return NextResponse.json({message: "All fields are required"}, {status: 400});
        }

        const userExists = await User.findOne({email});

        if(userExists) {
            return NextResponse.json({message: "User already exists"}, {status: 400});
        }

        // hashed the password using bcrypt

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.create({fullname, email, password: hashedPassword});

        const user = await User.findOne({email}).select("-password");

        if(!user) {
            return NextResponse.json({message: "Error while creating user"}, {status: 500});
        }

        // create jwt token and set in cookie

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET as string, {expiresIn: "1d"});

        res.cookies.set("_bridge_access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24
        });

        return NextResponse.json({message: "User created successfully", user}, {status: 200});
        
    } catch (error) {
        console.log(`Error while creating user: ${error}`);
        return NextResponse.json({message: "Error while creating user"}, {status: 500});
    }
}