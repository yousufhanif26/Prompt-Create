"use client";

import { useState } from "react";
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";



const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const {data:session} = useSession();
  const pathname = usePathname();
  const router = useRouter();
  return (
      <div className="prompt_card">
        <div className="flex justify-between item-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3 cusror-pointer">
            <Image 
              src={post.creator.image}            
              alt="use_image"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
            <div className="flex flex-col">
              <h3>{post.creator.username}</h3>
              <p>{post.creator.email}</p>
              <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
              <p
                className='font-inter text-sm blue_gradient cursor-pointer'
                onClick={() => handleTagClick && handleTagClick(post.tag)}
              >
                #{post.tag}
              </p>
            </div>
          </div>

        </div>

      </div>
  )
}

export default PromptCard;
