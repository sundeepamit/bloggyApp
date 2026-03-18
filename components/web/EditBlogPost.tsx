// "use client"
// import { Button } from "@/components/ui/button"
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { createPost } from "@/app/actions"
// import { useRouter } from "next/navigation"
// import { toast } from "sonner"


// interface IPost {
//     _id: string;
//     title: string;
//     content: string;
//     imageUrl: string;
//     authorName: string;
//     createdAt: string;
// }

// type EditProps = {
//     post: IPost;
// }
// export default function EditBlog({ post }: EditProps) {
//     console.log(post)
//     return (
//         <Card className="w-full m-auto mt-11 shadow-2xl">
//             <CardHeader>
//                 <CardTitle className="text-3xl font-bold">Update Blog Post</CardTitle>
//                 <CardDescription className="text-xl">
//                     Fill all inputs to create a blog
//                 </CardDescription>
//                 <CardContent>
//                     <form >
//                         <div className="flex flex-col gap-6 my-7">
//                             <div className="grid gap-2">
//                                 <Label htmlFor="title" className="text-2xl">Title</Label>
//                                 <Input
//                                     className="py-5"
//                                     id="title"
//                                     type="text"
//                                     placeholder="summer vaccation"
//                                     name="title"
//                                     value={post.title}
//                                     required
//                                 />
//                             </div>
//                             <div className="grid gap-2">
//                                 <div className="flex items-center">
//                                     <Label htmlFor="content" className="text-2xl">Content</Label>

//                                 </div>
//                                 <Textarea id={"content"} placeholder="Type your content here...." rows={10} name="content"></Textarea>
//                             </div>

//                             <div className="grid gap-2">
//                                 <div className="flex items-center">
//                                     <Label htmlFor="imageUrl" className="text-2xl">Image Url</Label>

//                                 </div>
//                                 <Input type="text" id="imageUrl" placeholder="https://www.image.com" className="py-5" name="imageUrl" />
//                             </div>
//                         </div>
//                         <Button type="submit" className="text-2xl w-32 h-11 hover:shadow-xl">Post</Button>
//                     </form>
//                 </CardContent>
//             </CardHeader>
//         </Card>
//     );
// }



"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { updatePost } from "@/app/actions"

interface IPost {
    _id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorName: string;
    authorId: string;
    createdAt: string;
}

type EditProps = {
    post: IPost
}

export default function EditBlog({ post }: EditProps) {
    const router = useRouter()
    const [title, setTitle] = useState(post?.title ?? "")
    const [content, setContent] = useState(post?.content ?? "")
    const [imageUrl, setImageUrl] = useState(post?.imageUrl ?? "")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await updatePost(post._id, post.authorId, { title, content, imageUrl })
            toast.success("Post updated successfully")
            router.push("/dashboard")
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to update post")
        }
    }

    return (
        <Card className="w-full m-auto mt-11 shadow-2xl">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">Update Blog Post</CardTitle>
                <CardDescription className="text-xl">
                    Fill all inputs to update the blog
                </CardDescription>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6 my-7">
                            <div className="grid gap-2">
                                <Label htmlFor="title" className="text-2xl">Title</Label>
                                <Input
                                    className="py-5"
                                    id="title"
                                    type="text"
                                    placeholder="summer vacation"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="content" className="text-2xl">Content</Label>
                                <Textarea
                                    id="content"
                                    placeholder="Type your content here...."
                                    rows={10}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="imageUrl" className="text-2xl">Image Url</Label>
                                <Input
                                    type="text"
                                    id="imageUrl"
                                    placeholder="https://www.image.com"
                                    className="py-5"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                />
                            </div>
                        </div>
                        <Button type="submit" className="text-2xl w-32 h-11 hover:shadow-xl">
                            Update
                        </Button>
                    </form>
                </CardContent>
            </CardHeader>
        </Card>
    )
}