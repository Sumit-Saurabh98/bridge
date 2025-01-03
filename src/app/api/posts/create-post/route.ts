import connectDB from "@/lib/db";
import Post from "@/models/Post";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const {title, content, image, category} = await req.json();

        if(!title || !content || !image || !category) {
            return NextResponse.json({message: "All fields are required"}, {status: 400});
        }

        const post = await Post.create({title, content, image, category});

        return NextResponse.json({message: "Post created successfully", post}, {status: 200});

    } catch (error) {
        console.log(`Error while creating the post: ${error}`);
        return NextResponse.json({message: "Error while creating the post"}, {status: 500});
    }
}