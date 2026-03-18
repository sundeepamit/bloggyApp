import { getPostById } from "@/app/actions"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import BlogLike from "@/components/web/BlogLike"
import BlogPostDeleteButton from "@/components/web/BlogPostDeleteButton"

type BlogProp = {
    params: Promise<{ blogId: string }>
}

export default async function BlogPostById(props: BlogProp) {
    const { blogId } = await props.params
    const post = await getPostById(blogId)

    return (
        <div className="mt-3">
            <main>
                <h1 className="text-4xl font-bold text-shadow-2xs antialiased">{post.title} </h1>
                <div className="flex items-center justify-between">
                    <span className="mt-4 inline-block text-gray-500">Created At: {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                    <BlogLike />
                </div>

                <div className="mb-3">
                    <img src={post.imageUrl} alt="image of post" className="w-3xl rounded-2xl mt-8 shadow-xl" />
                    <p className="mt-7 mb-6 text-xl text-gray-700 antialiased tracking-wide">{post.content}</p>
                    <div className="flex items-center justify-between">
                        <Button variant={"default"} className="text-2xl p-6" ><Link href={"/dashboard"}>Back</Link></Button>
                        <BlogPostDeleteButton authorId={post.authorId} postId={post._id} />
                    </div>

                </div>
            </main>

        </div>
    )
}