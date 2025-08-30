import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[35px] rounded-md border border-white/10 focus:border-luminousPink font-light bg-primary px-4 py-5 text-base placeholder:text-white/70 outline-none",
        className
      )}
      {...props} />
  );
}

export { Input } 
