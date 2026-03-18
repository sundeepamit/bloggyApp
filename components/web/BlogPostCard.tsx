
import { getUserPost } from "@/app/actions";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function BlogPostCard() {
    const data = await auth.api.getSession({
        headers: await headers()
    })

    if (!data) {
        redirect('/login')
    }
    const { session } = data

    // console.log(session)
    const userId = session.userId
    const userPosts = await getUserPost(userId)
    // console.log(userPosts[0]._id.toString())
    //  w-full max-w-smmb-5
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {userPosts.map((post) => (
                <Card key={post._id.toString()} className=" shadow-2xl flex flex-col ">
                    <CardHeader className="min-h-20">
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>CreatedAt: {new Date(post.createdAt).toLocaleDateString()}</CardDescription>
                    </CardHeader >
                    <CardContent className="flex-1">
                        {post.imageUrl && (
                            <Link href={`/dashboard/${post._id.toString()}`}><img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover rounded-md mb-2" /></Link>


                        )}
                        <p className="text-sm text-muted-foreground line-clamp-3">{post.content}</p>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between" >
                        <span className="text-sm text-muted-foreground">By {post.authorName}</span>
                        <span><Link href={`/edit/${post._id}`} className="text-blue-400 underline">Edit</Link></span>
                    </CardFooter>
                </Card>

            ))}
        </div>
    )
}