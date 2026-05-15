"use client";

import { useEffect } from "react";
import { incrementViews } from "@/lib/blogStore";

/** Drop this anywhere in a blog post page (renders nothing). */
export default function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    incrementViews(slug);
  }, [slug]);
  return null;
}
