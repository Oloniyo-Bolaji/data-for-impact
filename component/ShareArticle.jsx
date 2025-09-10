"use client";

import { useEffect, useState } from "react";
import { FacebookIcon } from "@/lib/icons/facebook";
import LinkedInIcon from "@/lib/icons/linkedin";
import WhatsAppIcon from "@/lib/icons/whatsapp";
import { Link } from "lucide-react"; // you can swap Twitter with your XIcon if you prefer
import XIcon from "@/lib/icons/x";

const ShareArticle = ({ title, slug }) => {
  const [url, setUrl] = useState("");

  // ensure safe client-side URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}/blog/${slug}`);
    }
  }, [slug]);

  const copyLink = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      // replace alert with lightweight UX (optional: use a toast library instead)
      console.info("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mt-8 border-t pt-5">
      <h3 className="text-sm font-semibold my-2">Share this article</h3>

      <div className="flex gap-3 text-xl">
        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <FacebookIcon size={22} color="#1877F2" />
        </a>

        {/* X / Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
          className="text-black hover:text-sky-600"
        >
          <XIcon size={22} color="#000000"/>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          <LinkedInIcon size={22} color="#0A66C2" />
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(title)}%20-%20${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
        >
          <WhatsAppIcon size={22} color="#25D366" />
        </a>

        {/* Copy Link */}
        <button
          onClick={copyLink}
          aria-label="Copy link"
          className="text-gray-500 hover:text-gray-800"
        >
          <Link size={22} />
        </button>
      </div>
    </div>
  );
};

export default ShareArticle;
