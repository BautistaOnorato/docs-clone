"use server"

import { auth, clerkClient } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getDocuments(ids: Id<"documents">[]) {
  const documents = await convex.query(api.documents.getByIds, { ids });
  return documents;
}

export async function getUsers() {
  const { sessionClaims } = await auth();
  const clerk = await clerkClient()
  
  const { id: sessionOrganizationId } = sessionClaims?.o as { id: string };

  const repsonse = await clerk.users.getUserList({
    organizationId: [sessionOrganizationId],
  })

  const users = repsonse.data.map(user => ({
    id: user.id,
    name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: user.imageUrl,
    color: ""
  }))

  return users
} 
