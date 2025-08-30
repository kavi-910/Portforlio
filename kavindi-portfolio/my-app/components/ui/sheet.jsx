"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { IoMdClose } from "react-icons/io";

import { cva } from "class-variance-authority";


// simple bindings
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef(function SheetOverlay(
  { className, ...props },
  ref
) {
  return (
    <SheetPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/50",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  );
});
SheetOverlay.displayName = "SheetOverlay";

// class builder for the panel
export const sheetVariants = cva(
  [
    "fixed z-50 flex flex-col bg-primary shadow-lg transition ease-in-out",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:duration-300 data-[state=open]:duration-500",
  ].join(" "),
  {
    variants: {
      side: {
        right:
          "inset-y-0 right-0 h-full data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        left:
          "inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        top:
          "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      },
      size: {
        sm: "w-3/4 sm:max-w-sm",
        md: "w-3/4 sm:max-w-md",
        lg: "w-3/4 sm:max-w-lg",
        xl: "w-3/4 sm:max-w-xl",
        full: "w-screen h-screen sm:max-w-none",
      },
      padded: {
        true: "p-6 gap-4",
        false: "",
      },
    },
    defaultVariants: {
      side: "right",
      size: "md",
      padded: true,
    },
  }
);


const SheetContent = React.forwardRef(function SheetContent(
  { className, children, side = "right", size = "md", padded = true, ...props },
  ref
) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side, size, padded }), className)}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="absolute right-8 top-8 transition-opacity outline-none">
          <IoMdClose className="text-3xl text-luminousPink" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
});

SheetContent.displayName = "SheetContent";

function SheetHeader({ className, ...props }) {
  return <div className={cn("flex flex-col gap-1.5 p-4", className)} {...props} />;
}
function SheetFooter({ className, ...props }) {
  return (
    <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
  );
}

const SheetTitle = React.forwardRef(function SheetTitle({ className, ...props }, ref) {
  return (
    <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
  );
});
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef(function SheetDescription(
  { className, ...props },
  ref
) {
  return (
    <SheetPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
SheetDescription.displayName = "SheetDescription";

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
