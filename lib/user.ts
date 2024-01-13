"use server";
import { revalidatePath } from "next/cache";
import { User, clerkClient } from "@clerk/nextjs/server";

export async function getAllUsers(query?: string): Promise<User[]> {
  const user: User[] = await clerkClient.users.getUserList({ query });
  if (!user) return [];
  return user;
}

export async function updateUser(prevState: any, formData: FormData) {
  try {
    const rawFormData = {
      username: formData.get("username"),
      id: formData.get("id"),};
    const params = { username: rawFormData.username };

  const user=  await clerkClient.users.updateUser(rawFormData.id as string, {
      username: params.username as string,});
    revalidatePath('/')
    return { message: `The new user info: ${user.username}` };
  } catch (error) {
    return { message: `err: ${error}` };
  }
}

export async function deleteUser(prevState: any, formData: FormData) {
  try {
    const rawFormData = {
      id: formData.get("id"),
    };

    const user = await clerkClient.users.deleteUser(rawFormData.id as string);
    revalidatePath("/");

    // return { message: `This user was deleted successfully : ${user.id}` };
    return { message: `This user was deleted successfully : ${user.username}` };
  } catch (error) {
    return { message: `err: ${error}` };
  }
}

