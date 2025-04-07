import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import GoogleSignInForm from "./google-signin-form";

interface SignInPageProps {
  searchParams: Promise<{
    callbackUrl?: string;
    error?: string;
    ref?: string;
  }>;
}

export const metadata: Metadata = {
  title: `Sign In - ${APP_NAME}`,
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const session = await auth();
  const params = await searchParams;
  const callbackUrl = params?.callbackUrl;

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/5 w-6 h-6 opacity-40 animate-float-slow">
          <div className="w-full h-full rounded-full bg-blue-500/20 blur-sm"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 opacity-30 animate-float-medium">
          <div className="w-full h-full rounded-full bg-blue-400/20 blur-sm"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 opacity-20 animate-float-fast">
          <div className="w-full h-full rounded-full bg-blue-300/20 blur-sm"></div>
        </div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 right-1/6 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl animate-pulse-medium"></div>
        <div className="absolute top-10 left-1/2 w-40 h-40 rounded-full bg-blue-400/10 blur-3xl animate-pulse-fast"></div>
      </div>
      
      <Card className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-blue-500/20 shadow-[0_0_35px_rgba(59,130,246,0.3)] rounded-2xl overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-blue-800/10 pointer-events-none"></div>
        
        <CardHeader className="space-y-6 pb-8 relative z-10">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <Link href="/" className="relative block rounded-full p-1 bg-white/5 ring-1 ring-blue-500/50">
                <Image
                  src="/assets/icons/logo.png"
                  width={70}
                  height={70}
                  alt={APP_NAME}
                  className="rounded-full transform transition-all duration-500 hover:scale-105"
                />
              </Link>
            </div>
          </div>

          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent pb-1 animate-gradient">
              Welcome Back
            </h1>
            <p className="text-sm text-blue-100/70">
              Sign in to continue your job application journey
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-8 relative z-10 pb-8">
          <div className="transition-all duration-500 hover:scale-102">
            <GoogleSignInForm />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              <p className="text-sm font-medium text-blue-100/80">
                Streamline your job applications
              </p>
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse delay-300"></div>
            </div>

            <div className="text-center space-y-3 mt-6">
              <p className="text-sm text-blue-100/70">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Sign up
                </Link>
              </p>
              <p className="text-xs text-blue-200/50">
                By continuing, you agree to our{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Terms & Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
