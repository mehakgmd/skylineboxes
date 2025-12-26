import { createClient } from "next-sanity";

export const serverClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production2",
  apiVersion: "2025-12-03",
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
  perspective: "published",
});
