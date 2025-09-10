import ShareArticle from "@/DynamicComponents/ShareArticleWrapper";
import { components } from "@/lib/components";
import { urlFor } from "@/lib/imageBuilder";
import getReadingTime from "@/lib/readTime";
import { client } from "@/src/sanity/client";
import { getArticle } from "@/src/sanity/queries";
import { PortableText } from "next-sanity";
import Image from "next/image";

const BlogContent = async ({ params }) => {
  const { slug } = await params;

  // Fetch article with revalidation
  const article = await client.fetch(
    getArticle,
    { slug },
    { next: { revalidate: 30 } }
  );

  if (!article) {
    return (
      <div className="mx-auto max-w-screen-xl px-5 py-10 text-center text-gray-600">
        <p>Sorry, this article could not be found.</p>
      </div>
    );
  }

  // Format date
  const formattedDate = new Date(article._createdAt).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-5 py-5 lg:px-[150px] sm:px-[100px] px-5">
        {/* Meta info */}
        <div className="text-sm font-medium text-blue">
          <span>{formattedDate}</span> ·
          <span>{getReadingTime(article.content)}</span>
        </div>

        {/* Title */}
        <h1 className="mt-2 sm:text-[40px] text-[30px] text-blue lg:font-extrabold sm:font-semibold font-bold sm:leading-[46px] leading-[36px]">
          {article.title}
        </h1>

        {/* Cover image */}
        {article.coverImage && (
          <div className="sm:px-[50px] px-[10px]">
            <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px]">
              <Image
                src={urlFor(article.coverImage).url()}
                alt={article.title || "Blog cover image"}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover rounded-md"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        )}

        {/* Body content */}
        <PortableText value={article.content} components={components} />

        {/* Share buttons */}
        <ShareArticle slug={slug} title={article.title} />
      </div>
    </div>
  );
};

export default BlogContent;
