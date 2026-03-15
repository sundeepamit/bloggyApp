import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
export default function DashboardPage() {
  return (
    <div className="mt-3">
      <Link className={cn(buttonVariants({ variant: "default" }), "text-2xl", "w-40", "py-6")} href={'/create'}>Create Post</Link>
      {/* show blogposts which is created by that use in dashboard not other user post.
       -- fetch data from database 
       -- And render that data in card 
      */}
    </div >
  );
}
