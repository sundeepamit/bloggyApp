import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BlogPostCard from "@/components/web/BlogPostCard";

export default async function DashboardPage() {

  return (
    <div className="mt-3">
      <Link className={cn(buttonVariants({ variant: "default" }), "text-2xl", "w-auto", "h-auto", "py-1.5", "inline-block")} href={'/create'}>Create Post</Link>

      <BlogPostCard />
    </div >
  );
}
