"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { signIn } from "@/lib/auth-client"
import { toast } from "sonner"
import { useState } from "react"
import { Loader2 } from "lucide-react"

export default function LoginRoute() {
  const [isPending, setIsPending] = useState(false)

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    await signIn.email({
      email: email,
      password: password,
      callbackURL: '/dashboard'
    }, {
      onRequest: () => {
        setIsPending(true)
      },
      onSuccess: () => {
        toast.success('Login successfully')
        setIsPending(false)
      },
      onError: (ctx) => {
        toast.error(ctx.error.message)
        setIsPending(false)
      },
    })
  }

  return (
    <Card className="w-full max-w-sm m-auto mt-4">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link"><Link href={"/signup"}>Sign Up</Link></Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} method="post">
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Joe@example.com"
                name="email"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" placeholder="********" name="password" required />
            </div>
          </div>
          <CardFooter className="flex-col gap-2 mt-4">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? <Loader2 className="animate-spin" /> : "Login"}
            </Button>
            <p className="font-semibold m-2">or Create a new account</p>
            <Button variant="outline" className="w-full" disabled={isPending}>
              <Link href={"/signup"}>SignUp</Link>
            </Button>
          </CardFooter>
        </form>
      </CardContent>

    </Card>
  );
}
