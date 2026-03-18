import { getPostById } from "@/app/actions";
import EditBlog from "@/components/web/EditBlogPost";

type TParam = {
    params: Promise<{ blogId: string }>
}

export default async function EditBlogPost({ params }: TParam) {
    const { blogId } = await params
    const post = await getPostById(blogId)
    return (
        <div>
            {/* create update form to update post */}
            <EditBlog post={post} />
        </div>
    );
}