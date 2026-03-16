"use server"
import { BlogPost } from '@/models/blogPost'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'



export async function createPost(title: string, content: string, imageUrl: string) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session?.user) {
        throw new Error('Unauthorized: You must be logged in to create a post')
    }
    try {
        const blogPost = await BlogPost.create({ title: title, content: content, imageUrl: imageUrl, authorName: session?.user.name })
        // ✅ Convert Mongoose doc to plain object
        const plain = blogPost.toObject()
        revalidatePath('/dashboard')
        return { success: true }
    } catch (err) {
        console.error('Failed to create post:', err)
        return { success: false, error: 'Failed to create blog post' }
    }
}