"use client"
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
import { Textarea } from "@/components/ui/textarea"
import { createPost } from "@/app/actions"
import { useRouter } from "next/navigation"

export default function CreatePostForm() {

    const router = useRouter()

    const handlePostSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get('title') as string
        const content = formData.get('content') as string
        const imageUrl = formData.get('imageUrl') as string
        const result = await createPost(title, content, imageUrl)
        if (result.success) {
            alert('Post created')
            router.push('/dashboard')

        } else {
            alert(result.error)

        }

    }

    return (
        <Card className="w-full m-auto mt-11 shadow-2xl">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">Write Blog Post</CardTitle>
                <CardDescription className="text-xl">
                    Fill all inputs to create a blog
                </CardDescription>
                <CardContent>
                    <form onSubmit={handlePostSubmit}>
                        <div className="flex flex-col gap-6 my-7">
                            <div className="grid gap-2">
                                <Label htmlFor="title" className="text-2xl">Title</Label>
                                <Input
                                    className="py-5"
                                    id="title"
                                    type="text"
                                    placeholder="summer vaccation"
                                    name="title"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="content" className="text-2xl">Content</Label>

                                </div>
                                <Textarea id={"content"} placeholder="Type your content here...." rows={10} name="content"></Textarea>
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="imageUrl" className="text-2xl">Image Url</Label>

                                </div>
                                <Input type="text" id="imageUrl" placeholder="https://www.image.com" className="py-5" name="imageUrl" />
                            </div>
                        </div>
                        <Button type="submit" className="text-2xl w-32 h-11 hover:shadow-xl">Post</Button>
                    </form>
                </CardContent>
            </CardHeader>
        </Card>

    )
}