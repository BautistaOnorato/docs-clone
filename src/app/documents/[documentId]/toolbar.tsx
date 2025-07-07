"use client";

import { Separator } from "@/components/ui/separator";
import { useEditorStore } from "@/store/use-editor-store";
import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { HeadingLevelButton } from "./(toolbar-buttons)/headingLevelButton";
import { ToolbarButton } from "./(toolbar-buttons)/toolbarButton";
import { FontFamilyButton } from "./(toolbar-buttons)/fontFamilyButton";
import { TextColorButton } from "./(toolbar-buttons)/textColorButton";
import { HighlightColorButton } from "./(toolbar-buttons)/highlightColorButton";
import { LinkButton } from "./(toolbar-buttons)/linkButton";
import { ImageButton } from "./(toolbar-buttons)/imageButton";
import { AlignButton } from "./(toolbar-buttons)/alignButton";
import { ListButton } from "./(toolbar-buttons)/listButton";
import { FontSizeButton } from "./(toolbar-buttons)/fontSizeButton";
import { LineHeightButton } from "./(toolbar-buttons)/lineHeightButton";

export const Toolbar = () => {
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        onClick: () => editor?.chain().focus().toggleBold().run(),
        isActive: editor?.isActive("bold"),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        onClick: () => editor?.chain().focus().toggleItalic().run(),
        isActive: editor?.isActive("italic"),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
        isActive: editor?.isActive("underline"),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => editor?.chain().focus().addPendingComment().run(),
        isActive: editor?.isActive("liveBlocksCommentMark"),
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[20px] min-h-[40px] flex items-center gap-x-1 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton
          key={item.label}
          onClick={item.onClick}
          isActive={item.isActive}
          icon={item.icon}
        />
      ))}

      <Separator orientation="vertical" className="!h-6 bg-neutral-300" />
      <FontFamilyButton />

      <Separator orientation="vertical" className="!h-6 bg-neutral-300" />
      <HeadingLevelButton />

      <Separator orientation="vertical" className="!h-6 bg-neutral-300" />
      <FontSizeButton />
      
      <Separator orientation="vertical" className="!h-6 bg-neutral-300" />
      {sections[1].map((item) => (
        <ToolbarButton
          key={item.label}
          onClick={item.onClick}
          isActive={item.isActive}
          icon={item.icon}
        />
      ))}

      <TextColorButton />
      <HighlightColorButton />

      <Separator orientation="vertical" className="!h-6 bg-neutral-300" />
      <LinkButton />
      <ImageButton />
      <AlignButton />
      <LineHeightButton />
      <ListButton />

      {sections[2].map((item) => (
        <ToolbarButton
          key={item.label}
          onClick={item.onClick}
          isActive={item.isActive}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
