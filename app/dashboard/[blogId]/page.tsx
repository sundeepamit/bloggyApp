
type BlogProp = {
    params: Promise<{ blogId: string }>
}

export default async function BlogPostById(props: BlogProp) {
    const { blogId } = await props.params
    console.log(blogId)
    return (
        <div>
            <h1>Hello from </h1>
        </div>
    )
}