import { LoaderIcon } from "lucide-react";

interface FullscreenLoaderProps {
  label?: string;
}

export const FullscreenLoader = ({
  label
}: FullscreenLoaderProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-2">
      <LoaderIcon className="size-10 text-muted-foreground animate-spin" />
      {label && <p className="text-muted-foreground text-md">{label}</p>}
    </div>
  );
};
