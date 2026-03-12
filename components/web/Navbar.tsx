import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Link href={"/"}>
                    <h1 className="text-3xl font-semibold">Blo<span className="text-blue-500">gyy</span></h1>
                </Link>
                <div className="sm:flex gap-6 items-center hidden">
                    <Link href="/" className="text-sm font-medium hover:text-blue-500 transition-color">Home</Link>
                    <Link href="/dashboard" className="text-sm font-medium hover:text-blue-500 transition-color">Dashboard</Link>

                </div>
            </div>
            <div className="flex gap-4 items-center">
                <Button variant={"default"} size={"lg"} className="inline-32 hover:shadow-xl transition-all">
                    <Link href={"/login"}>Login</Link>
                </Button>
                <Button variant={"secondary"} size={"lg"} className="inline-32 hover:shadow-xl transition-all">
                    <Link href={"/signup"}>Sign Up</Link>
                </Button>
            </div>
        </nav>
    )
}