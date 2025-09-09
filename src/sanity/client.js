import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "n1efasev",
  dataset: "production",
  apiVersion: "2025-09-09",
  useCdn: true,
});
