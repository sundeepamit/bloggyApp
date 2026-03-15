"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";


export default function ButtonState() {
    const { data: session, isPending } = useSession()
    if (isPending) return null;
    return (
        <div className="flex gap-4 items-center">
            {!session && <Button
                variant={"default"}
                size={"lg"}
                className="inline-32 hover:shadow-xl transition-all"
            >
                <Link href={"/login"}>Login</Link>
            </Button>}
            {session && <Button
                variant={"default"}
                size={"lg"}
                className="inline-32 hover:shadow-xl transition-all"
            >
                <Link href={"/"}>LogOut</Link>
            </Button>}


            {/* session is not null means user signup or login  */}
            {!session && <Button
                variant={"secondary"}
                size={"lg"}
                className="inline-32 hover:shadow-xl transition-all"
            >
                <Link href={"/signup"}>Sign Up</Link>
            </Button>}

        </div>
    );
}