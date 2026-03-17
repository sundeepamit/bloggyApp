import { getUserPost } from "@/app/actions";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
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
    return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {userPosts.map((post) => (
            <Card key={post._id.toString()} className="mb-5 shadow-2xl w-full max-w-sm ">
                <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>CreatedAt: {post.createdAt.toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                    {post.imageUrl && (
                        <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover rounded-md mb-2" />

                    )}
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.content}</p>
                </CardContent>
                <CardFooter>
                    <span className="text-sm text-muted-foreground">By {post.authorName}</span>
                </CardFooter>
            </Card>

        ))}
    </div>
    )
}