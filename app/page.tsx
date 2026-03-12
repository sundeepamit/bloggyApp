import dbConnect from "@/lib/mongodb";
import { BlogPost } from "@/models/blogPost";

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
  const blogPosts = await BlogPost.find({});
  // console.log(blogPosts);
  return blogPosts;
}

// async function createBlog() {
//   await dbConnect();
//   const blog = await BlogPost.create({
//     title: "A random Blog",
//     content: "this is random blog create for testing purpose.",
//     imageUrl: "https://picsum.photos/200",
//     authorUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
//     authorName: "Corliss Buchite",
//     createdAt: Date.now(),
//   });
//   console.log(blog);
// }

// createBlog();
//
export default async function Home() {
  const data = await getData();
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-wide mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => {
          return <h1 key={item._id}>{item.title}</h1>;
        })}
      </div>
    </div>
  );
}
