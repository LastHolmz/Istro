"server only"
import { clerkClient, useAuth } from "@clerk/nextjs";

export const getUser = async (userId: string | null | undefined) => {
    let user = null
    if (typeof userId === "string") {
         user = await clerkClient.users.getUser(userId as string);
    }
  if (!user) return null;
  return user
};
