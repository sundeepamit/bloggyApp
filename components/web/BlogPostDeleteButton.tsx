"use client"
import { Button } from "@/components/ui/button";
import { deletePostById } from "@/app/actions"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
    authorId: string;
    postId: string,
}


export default function BlogPostDeleteButton({ authorId, postId }: Props) {
    const router = useRouter()
    const handleDeletePost = async () => {
        try {
            await deletePostById(authorId, postId)
            toast.success('Post deleted successfully')
            router.push('/dashboard')
        } catch (err: any) {
            toast.error(err.message)
        }

    }

    return (
        <Button variant={"destructive"} onClick={handleDeletePost}>Delete Post</Button>
    );
}