import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type Post = {
  id: string;
  slug: string;
  title: string;
  body: string;
};

export const creatPosts = async ({ id, slug, title, body }: Post) => {
  const post = await prisma.post.create({ data: { id, slug, title, body } });
  return post;
};
export const getAllPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};
