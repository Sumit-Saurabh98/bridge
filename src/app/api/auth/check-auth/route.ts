import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/lib/db";

export async function GET(req:NextRequest) {
    try {
        await connectDB();

        const user = req?.user;

        if(!user) {
            return NextResponse.json({message: "Unauthorized user"}, {status: 401})
        }

        return NextResponse.json({message: "Authorized user", user}, {status: 200})
        
    } catch (error) {
        console.log(`Error while fetching user information: ${error}`)
        return NextResponse.json({message: "Error while fetching user information"}, {status: 500})
    }
}