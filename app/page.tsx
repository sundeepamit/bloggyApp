import dbConnect from "@/lib/mongodb";
import { BlogPost } from "@/models/blogPost";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
interface Blog {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  authorUrl: string;
  authorName: string;
  createdAt: Date;
}

async function getData(): Promise<Blog[]> {
  await dbConnect();
  const blogPosts = await BlogPost.find({}).lean();
  // console.log(blogPosts);
  return blogPosts;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-wide mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {data.map((post) => (
          <Card key={post._id.toString()} className="flex flex-col h-full shadow-2xl">
            <CardHeader>
              <CardTitle className="text-lg">{post.title}</CardTitle>
              <CardDescription>CreatedAt: {post.createdAt.toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              {post.imageUrl && (
                <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover rounded-md mb-2" />

              )}
              <p className="text-sm text-muted-foreground line-clamp-3">{post.content}</p>
            </CardContent>
            <CardFooter className="mt-auto flex justify-between">
              <span className="text-sm text-muted-foreground">By {post.authorName}</span>
              <Link href={`/dashboard/${post._id}`} className="text-blue-500 underline">Go to Detail</Link>

            </CardFooter>

          </Card>
        ))}
      </div>
    </div>
  );
}
