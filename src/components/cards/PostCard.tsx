import React from 'react';
import { PostType } from '../../types/Post';

interface PostCardProps {
  post: PostType;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <li className="bg-secondary/50 rounded-2xl border border-[#363749]/[.9] p-8">
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="text-[#A14A1AA] mt-4">{post.body}</p>
    </li>
  );
};

export default PostCard;