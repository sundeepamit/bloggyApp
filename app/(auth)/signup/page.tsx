"use client";
import { signUp } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignUpRoute() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSignUp(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await signUp.email(
      {
        email: email,
        password: password,
        name: name,
      },
      {
        onRequest: () => setLoading(true),
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
        },
      },
    );
  }
  return (
    <Card className="w-full max-w-sm  m-auto">
      <CardHeader>
        <CardTitle>SignUp</CardTitle>
        <CardDescription>
          Enter your email and password to create new account
        </CardDescription>
        <CardAction>
          <Button variant="link">
            <Link href={"/login"}>Login</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignUp}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Jhon Doe"
                name="name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                name="email"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" name="password" required />
            </div>
          </div>
          <CardFooter className="flex-col gap-2 mt-6">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "registering....." : "SignUp"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
