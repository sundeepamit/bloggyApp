"use server"
import { BlogPost } from '@/models/blogPost'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

import dbConnect from '@/lib/mongodb'
export async function createPost(title: string, content: string, imageUrl: string) {
    const { session, user } = (await auth.api.getSession({
        headers: await headers()
    }))!
    if (!user) {
        throw new Error('Unauthorized: You must be logged in to create a post')
    }
    try {
        await dbConnect()
        const blogPost = await BlogPost.create([{
            title: title,
            content: content,
            imageUrl: imageUrl,
            authorName: user.name,
            authorId: session.userId
        }])
        revalidatePath('/dashboard')
    } catch (err) {
        console.error('Failed to create post:', err)
        return { success: false, error: 'Failed to create blog post' }
    }
}