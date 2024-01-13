"use server";
import { revalidatePath } from "next/cache";
import { User, clerkClient } from "@clerk/nextjs/server";
import { Roles } from "@/types/globals";

export async function getAllUsers(query?: string): Promise<User[]> {
  const user: User[] = await clerkClient.users.getUserList({ query });
  if (!user) return [];
  return user;
}

export async function updateUser(prevState: any, formData: FormData) {
  try {
    const rawFormData = {
      username: formData.get("username"),
      id: formData.get("id"),
    };
    const params = { username: rawFormData.username };

    const user = await clerkClient.users.updateUser(rawFormData.id as string, {
      username: params.username as string,
    });
    revalidatePath("/");
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

export async function createNewUser(prevState: any, formData: FormData) {
  try {
    const rawFormData = {
      // id: formData.get("id") as string,
      username: formData.get("username") as string,
      password: formData.get("password") as string,
      role: formData.get("role") as string,
      email: formData.get("email") as string,
    };
    const params = {
      username: rawFormData.username,
      password: rawFormData.password,
      emailAddress: [rawFormData.email],
      meta: {
        publicMetadata: {
          role: rawFormData.role as string,
        },
      },
    };
    const user = await clerkClient.users.createUser(params);
    revalidatePath("/");

    // return { message: `This user was deleted successfully : ${user.id}` };
    return { message: `new user was created successfully : ${user.username}` };
  } catch (error) {
    return { message: `err: ${error}` };
  }
}
