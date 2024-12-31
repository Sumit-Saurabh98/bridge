// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import User from '@/models/User';


export async function middleware(req: NextRequest) {
    const accessToken = req.cookies.get('_bridge_access_token')?.value;

    if (!accessToken) {
        return NextResponse.json({ message: "Unauthorized user - no access token provided", status: false }, { status: 401 });
    }

    try {
        const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET as string) as jwt.JwtPayload;
        const user = await User.findById(decodedToken.id).select('-password');

        if (!user) {
            return NextResponse.json({ message: "Invalid token", status: false }, { status: 401 });
        }

        req.user = user;

        return NextResponse.next();
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error(`Error in authenticate middleware: ${errorMessage}`);
        return NextResponse.json({ message: "Unauthorized - invalid token provided", status: false }, { status: 401 });
    }
}

// Optional: Specify which paths this middleware should apply to
export const config = {
    matcher: ['/api/auth/checkAuth'], // Adjust this matcher based on your API routes
};
