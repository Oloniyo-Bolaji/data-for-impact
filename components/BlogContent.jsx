import { components } from "@/lib/components";
import { urlFor } from "@/lib/imageBuilder";
import getReadingTime from "@/lib/readTime";
import { client } from "@/src/sanity/client";
import { getArticle } from "@/src/sanity/queries";
import { PortableText } from "next-sanity";
import Image from "next/image";
import ShareArticle from "../dynamic-components/ShareArticleWrapper";

const options = { next: { revalidate: 30 } };

const BlogContent = async ({ params }) => {
  const { slug } = await params;

  const article = await client.fetch(getArticle, { slug });

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-[20px] py-[20px] lg:px-[150px] sm:px-[100px] px-[20px]">
        <div className="text-[15px] font-medium text-[#00274d]">
          <span>
            {new Date(article._createdAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>{" "}
          · <span>{getReadingTime(article.content)}</span>
        </div>

        <div>
          <h1 className="mt-[10px] sm:text-[40px] text-[30px] text-[#00274D] lg:font-extrabold sm:font-semibold font-bold sm:leading-[40px] leading-[30px]">
            {article.title}
          </h1>
        </div>

        {article.coverImage && (
          <div className="sm:px-[50px] px-[10px]">
            <div className="relative w-full h-[300px]">
              <Image
                src={urlFor(article.coverImage).url()}
                alt="cover image"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover rounded-md"
                priority
              />
            </div>
          </div>
        )}

        <PortableText value={article.content} components={components} />

        <div>
          <ShareArticle slug={slug} title={article.title} />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
