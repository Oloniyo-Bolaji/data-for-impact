"use client";

import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React, { useRef, useMemo } from "react";
import getReadingTime from "@/lib/readTime";
import Link from "next/link";

// ✅ Extract helper outside so it’s not recreated on each render
const getPlainText = (blocks) =>
  blocks
    .map((block) => block.children?.map((child) => child.text).join("") || "")
    .join("\n");

const BlogCard = ({ article }) => {
  const cardRef = useRef(null);

  // ✅ Memoize preview text so it doesn’t recompute unnecessarily
  const previewText = useMemo(() => {
    const text = getPlainText(article.content);
    return text.length > 120 ? text.slice(0, 120) + "..." : text;
  }, [article.content]);

  return (
    <div className="p-5 rounded-md shadow-md transition-transform transform-gpu will-change-transform">
      {article.coverImage && (
        <div className="w-full h-52 relative">
          <Image
            src={urlFor(article.coverImage).url()}
            alt={article.title || "Blog cover"}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover rounded"
            loading="lazy"
          />
        </div>
      )}

      <div className="mt-3">
        <div className="flex items-center justify-end">
          <p className="text-sm text-gray-500">
            {getReadingTime(article.content)}
          </p>
        </div>

        <h3 className="text-base font-semibold line-clamp-2">
          {article.title || "Untitled"}
        </h3>

        <p className="text-xs text-gray-600 mt-1">
          {previewText}{" "}
          <Link
            href={`/blog/${article.slug}`}
            className="text-red-500 hover:underline"
          >
            Read more
          </Link>
        </p>

        <div className="flex gap-2.5 items-center mt-3">
          <div className="relative h-8 w-8 rounded-full border border-black overflow-hidden">
            <Image
              src={
                article.author?.profilePicture?.asset
                  ? urlFor(article.author.profilePicture.asset).url()
                  : "/user.png"
              }
              alt={article.author?.name || "User avatar"}
              fill
              sizes="32px"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col text-xs text-gray-600">
            <span className="font-medium">
              {article.author?.name || "Anonymous"}
            </span>
            <span>
              {new Date(article._createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
