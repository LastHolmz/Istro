"use server";

import { User, clerkClient } from "@clerk/nextjs/server";

export async function getAllUsers(query?: string): Promise<User[]> {
  const user: User[] = await clerkClient.users.getUserList({ query });
  if (!user) return [];
  return user;
}

export async function updateUser(prevState: any, formData: FormData) {
  try {
    const rawFormData = {
      id: formData.get("email"),
      // role: formData.get("role"),
      // status: formData.get("status"),
    };
    console.log(rawFormData);
    return { message: `here's the info id: ${rawFormData.id}` };
  } catch (error) {
    return { message: `err: ${error}` };
  }
}
