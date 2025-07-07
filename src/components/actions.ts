"use server"

import { revalidatePath } from "next/cache";
import { Id } from "../../convex/_generated/dataModel";

export async function revalidateDocumentPath(id: Id<"documents">) {
  console.log(1);
  
  revalidatePath(`/documents/${id}`);
}
