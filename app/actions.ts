/**
 * This file contain functions that mutate data from database. BlogPost data
 */
"use server"
import { BlogPost } from '@/models/blogPost'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import dbConnect from '@/lib/mongodb'
import { notFound } from 'next/navigation'
import mongoose from 'mongoose'


export async function getuserSession() {
    const data = await auth.api.getSession({
        headers: await headers()
    })

    if (!data) {
        throw new Error('Unauthorized: You must be logged in')
    }

    const { session } = data
    return session
}

export async function createPost(title: string, content: string, imageUrl: string) {
    const { session, user } = (await auth.api.getSession({
        headers: await headers()
    }))!
    if (!user) {
        throw new Error('Unauthorized: You must be logged in to create a post')
    }
    try {
        await dbConnect()
        await BlogPost.create([{
            title: title,
            content: content,
            imageUrl: imageUrl,
            authorName: user.name,
            authorId: session.userId
        }])
        revalidatePath('/dashboard')
        return { success: true }
    } catch (err) {
        console.error('Failed to create post:', err)
        return { success: false, error: 'Failed to create blog post' }
    }
}


export async function getUserPost(authorId: string) {
    const data = await auth.api.getSession({
        headers: await headers()
    })

    if (!data) {
        throw new Error('Unauthorized: You must be logged in')
    }

    const { session } = data

    await dbConnect()

    if (authorId !== session.userId) {
        throw new Error('Unauthorized: You can only view your own posts')
    }

    const blogs = await BlogPost.find({ authorId: authorId }).lean()
    return blogs
}

export async function getAllPost() {
    await dbConnect()
    const blogs = await BlogPost.find({}).lean()
    return blogs.map((blog) => ({
        ...blog,
        _id: blog._id.toString(),
        createdAt: blog.createdAt.toISOString()
    }))
}

export async function getPostById(id: string) {
    await dbConnect()
    if (!mongoose.Types.ObjectId.isValid(id)) {
        notFound()
    }

    const blog = await BlogPost.findById(id).lean()
    if (!blog) {
        // throw new Error("Blog not exist")
        notFound()
    }
    return { ...blog, _id: blog._id.toString(), createdAt: blog.createdAt.toISOString() }
}

export async function deletePostById(authorId: string, postId: string) {
    await dbConnect()

    const data = await auth.api.getSession({
        headers: await headers()
    })

    if (!data) {

        throw new Error('Unauthorized: You must be logged in')
    }

    const { session } = data

    if (authorId !== session.userId) {
        throw new Error('Unauthorized: You cannot delete this post')
    }

    const deletedPost = await BlogPost.findByIdAndDelete(postId).lean()

    if (!deletedPost) {
        throw new Error('Post not found')
    }

}