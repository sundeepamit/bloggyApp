// // Named export
// export function Footer() {
//     return <div>
//         <h1>Footer goes here</h1>
//     </div>
// }


import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white  dark:bg-black">
            <div className="max-w-4xl mx-auto px-6 py-10  ">

                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Bloggy
                        </Link>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Thoughts, stories and ideas.
                        </p>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                            Blog
                        </Link>
                        <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-100 dark:border-gray-800" />

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-gray-400 dark:text-gray-500">
                    <p>© {currentYear} Bloggy. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            Privacy
                        </Link>
                        <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}