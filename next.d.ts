// next.d.ts
import { IUser } from '@/lib/interfaces';
import 'next/server';

declare module 'next/server' {
    interface NextRequest {
        user?: IUser;
    }
}