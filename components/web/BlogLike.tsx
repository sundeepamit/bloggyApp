"use client"
import { Heart } from "lucide-react"
import { useState } from "react";

export default function BlogLike() {
    const [liked, setLiked] = useState(false)
    const handleClicked = () => {
        return setLiked(!liked)
    }
    return (
        <span className="mr-7"><Heart className={`w-5 h-5 ${liked ? "fill-red-500" : "text-gray-500"}`} onClick={handleClicked} /></span>

    );
}