import React from "react";
import { client } from "@/src/sanity/client";
import { getArticles } from "@/src/sanity/queries";
import Header from "@/component/Header";
import NoBlog from "@/component/NoBlog";
import BlogCard from "@/card-component/BlogCard";

const options = { next: { revalidate: 30 } };

const Blog = async () => {
  const articles = await client.fetch(getArticles, {}, options);

  return (
    <>
      <Header heading="Our Blog" />
      <main className="max-w-screen-xl mx-auto py-5 sm:px-8 px-5">
        {articles && articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-start">
            {articles.map((article, index) => (
              <BlogCard article={article} key={article._id} index={index} />
            ))}
          </div>
        ) : (
          <NoBlog />
        )}
      </main>
    </>
  );
};

export default Blog;
