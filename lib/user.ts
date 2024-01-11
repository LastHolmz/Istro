"use server";

import { User, clerkClient } from "@clerk/nextjs/server";

export async function getAllUsers(query?: string): Promise<User[]> {
  const user: User[] = await clerkClient.users.getUserList({query});
  if (!user) return [];
  return user;
}
