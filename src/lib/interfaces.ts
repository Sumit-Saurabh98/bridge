export interface IUser {
    fullname: string;
    email: string;
    password: string;
    googleId?: string;
    githubId?: string;
    profileImage?: string;
    bio?: string;
}

export interface IPost {
    title: string;
    content: string;
    image: string;
    author: string;
    comments?: string[];
    likes?: string[];
    category?: string;
    createdAt: Date;
    _id: string
}

export interface IComment {
    content: string;
    author: string;
    postId: string;
}

export interface ILike {
    userId: string;
    postId: string;
}