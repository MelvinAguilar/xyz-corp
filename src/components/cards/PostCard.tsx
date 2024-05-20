import React from "react";
import { PostType } from "../../types/Post";

interface PostCardProps {
  post: PostType;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <li className="rounded-2xl border border-[#363749]/[.3] bg-gray-200 dark:bg-secondary/50 p-8 dark:border-[#363749]/[.9]">
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="mt-4 text-[#A14A1AA]">{post.body}</p>
    </li>
  );
};

export default PostCard;
