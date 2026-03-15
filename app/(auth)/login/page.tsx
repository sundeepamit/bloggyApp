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

export default function LoginRoute() {
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
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Joe@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" placeholder="********" required />
            </div>
          </div>
          <CardFooter className="flex-col gap-2 mt-4">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="font-semibold m-2">or Create a new account</p>
            <Button variant="outline" className="w-full">
              <Link href={"/signup"}>SignUp</Link>
            </Button>
          </CardFooter>
        </form>
      </CardContent>

    </Card>
  );
}
