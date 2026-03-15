import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import ButtonState from "@/components/web/ButtonsState";

export async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // {
  //   session: {
  //     expiresAt: 2026-03-20T06:49:47.061Z,
  //     token: 'uCoLaDr8Sj8dyZaWcl0Nl5bPmEMDR44g',
  //     createdAt: 2026-03-13T06:49:47.062Z,
  //     updatedAt: 2026-03-13T06:49:47.062Z,
  //     ipAddress: '0000:0000:0000:0000:0000:0000:0000:0000',
  //     userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
  //     userId: '69b3b38ac8e6a7ab378cfcae',
  //     id: '69b3b38bc8e6a7ab378cfcb0'
  //   },
  //   user: {
  //     name: 'test',
  //     email: 'test@test.com',
  //     emailVerified: false,
  //     image: undefined,
  //     createdAt: 2026-03-13T06:49:46.547Z,
  //     updatedAt: 2026-03-13T06:49:46.547Z,
  //     id: '69b3b38ac8e6a7ab378cfcae'
  //   }
  // }
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            Blo<span className="text-blue-500">gyy</span>
          </h1>
        </Link>
        <div className="sm:flex gap-6 items-center hidden">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-500 transition-color"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:text-blue-500 transition-color"
          >
            Dashboard
          </Link>
        </div>
      </div>
      <ButtonState />
    </nav>
  );
}



// <div className="flex gap-4 items-center">
//       <Button
//         variant={"default"}
//         size={"lg"}
//         className="inline-32 hover:shadow-xl transition-all"
//       >
//         <Link href={"/login"}>Login</Link>
//       </Button>
//       {/* session is not null means user signup or login  */}
//       {session ? <Button
//         variant={"secondary"}
//         size={"lg"}
//         className="inline-32 hover:shadow-xl transition-all"
//       >
//         <Link href={"/"}>Log out</Link>
//       </Button> : <Button
//         variant={"secondary"}
//         size={"lg"}
//         className="inline-32 hover:shadow-xl transition-all"
//       >
//         <Link href={"/signup"}>Sign Up</Link>
//       </Button>}
//     </div>