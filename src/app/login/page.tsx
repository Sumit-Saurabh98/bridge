'use client'

import { Button } from "@/components/ui/button"
import { Github, Globe, Mail, Lock, Loader, ArrowRight, Eye, EyeClosed } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
    const loginLoading = false
    const [showPassword, setShowPassword] = useState(false)
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleLogin = () => {
        // Login logic here
    }

    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
            {/* Left Side - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="max-w-md w-full space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold text-indigo-900">Welcome back!</h2>
                        <p className="text-slate-600">Please enter your details to sign in</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative">
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Email address
                                </label>
                                <div className="relative rounded-lg shadow-sm">
                                    <Mail className="absolute left-3 top-2 h-5 w-5 text-slate-400"/>
                                    <Input
                                        value={userData.email}
                                        onChange={(e) => setUserData({...userData, email: e.target.value.toLowerCase().trim()})}
                                        type="email"
                                        placeholder="Enter your email"
                                        className="pl-10 w-full py-2.5 bg-gray-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Password
                                </label>
                                <div className="relative rounded-lg shadow-sm">
                                    <Lock className="absolute left-3 top-2 h-5 w-5 text-slate-400"/>
                                    <Input
                                        value={userData.password}
                                        onChange={(e) => setUserData({...userData, password: e.target.value.trim()})}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="pl-10 w-full py-2.5 bg-gray-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                    {
                                        showPassword ? (
                                            <Eye onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2 h-5 w-5 text-slate-400" />
                                        ) : (
                                            <EyeClosed onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2 h-5 w-5 text-slate-400" />
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                                />
                                <label className="ml-2 text-sm text-slate-600">
                                    Remember me
                                </label>
                            </div>
                            <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </Link>
                        </div>

                        <Button
                            onClick={handleLogin}
                            className="w-full flex justify-center py-3 px-4 rounded-lg text-sm font-semibold text-white 
                                bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                                focus:ring-indigo-500 transition-all duration-150 ease-in-out disabled:opacity-50
                                shadow-lg hover:shadow-xl"
                            disabled={loginLoading || userData.email === "" || userData.password === ""}
                        >
                            {loginLoading ? (
                                <>
                                    <Loader className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign in"
                            )}
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-slate-200"></span>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-4 text-slate-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Button 
                                variant="outline" 
                                className="w-full py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600"
                            >
                                <Github className="mr-2 h-5 w-5"/> GitHub
                            </Button>
                            <Button 
                                variant="outline" 
                                className="w-full py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600"
                            >
                                <Globe className="mr-2 h-5 w-5"/> Google
                            </Button>
                        </div>

                        <p className="text-center text-sm text-slate-600">
                            Don&apos;t have an account?{' '}
                            <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Sign up for free <ArrowRight className="inline h-4 w-4" />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden md:block w-full md:w-1/2 bg-indigo-50">
                <div className="h-full w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-indigo-900/80 z-10"></div>
                    <Image 
                    width={1200}
                    height={800}
                        src="/api/placeholder/1200/800" 
                        alt="Login illustration" 
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-12 z-20">
                        <h3 className="text-4xl font-bold text-white mb-6">We waited for you!</h3>
                        <p className="text-indigo-100 text-lg max-w-md">
                        Your the genius one in join our community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}