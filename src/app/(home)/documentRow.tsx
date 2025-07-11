import { TableRow, TableCell } from "@/components/ui/table";
import { Doc } from "../../../convex/_generated/dataModel";
import { SiGoogledocs } from "react-icons/si";
import { Building2Icon, CircleUserIcon } from "lucide-react";
import { format } from "date-fns";
import { DocumentMenu } from "./documentMenu";
import { useRouter } from "next/navigation";

interface DocumentRowProps {
  doc: Doc<"documents">;
}

export const DocumentRow = ({ doc }: DocumentRowProps) => {
  const router = useRouter();

  const onNewTabClick = (id: string) => {
    window.open(`/documents/${id}`, "_blank");
  }

  const onRowClick = () => {
    router.push(`/documents/${doc._id}`);
  }

  return (
    <TableRow className="cursor-pointer" onClick={onRowClick}>
      <TableCell className="w-[50px]">
        <SiGoogledocs className="fill-blue-500 size-6" />
      </TableCell>
      <TableCell className="font-medium md:w-[45%]">{doc.title}</TableCell>
      <TableCell className="text-muted-foreground hidden md:flex items-center gap-2">
        {doc.organizationId ? (
          <Building2Icon className="size-4" />
        ) : (
          <CircleUserIcon className="size-4" />
        )}
        {doc.organizationId ? "Organization" : "Personal"}
      </TableCell>
      <TableCell className="text-muted-foreground hidden md:table-cell">
        {format(new Date(doc._creationTime), "MMM dd, yyyy")}
      </TableCell>
      <TableCell className="flex ml-auto justify-end">
        <DocumentMenu
          documentId={doc._id}
          title={doc.title}
          onNewTab={onNewTabClick}
        />
      </TableCell>
    </TableRow>
  );
};
