"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function ButtonState() {
    const { data: session, isPending } = useSession()
    const router = useRouter()
    if (isPending) return null;

    const handleLogOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push('/')
                    router.refresh();
                }
            }
        })
    }
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
                onClick={handleLogOut}
            >
                LogOut
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