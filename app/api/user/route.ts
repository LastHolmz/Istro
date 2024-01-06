import prisma from "@/lib/prisma";
import { getAllPosts } from "@/prisma/post";
import { NextResponse } from "next/server";

export async function GET() {
  // const posts = await prisma.post.findMany();
  //   if (posts) console.log(posts || "hello");
  // if (!posts || posts.length === 0) {
  //   return new Response(JSON.stringify({ error: "Not Found" }));
  // }
  const posts = getAllPosts();
  return new Response(JSON.stringify(posts));
  //   return new Response(JSON.stringify({ hello: "world" }));
}
