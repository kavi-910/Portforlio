"use client";

import { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // auto-close a few seconds after opening (optional)
  const CLOSE_DELAY = 5000;
  const timerRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
    return () => timerRef.current && clearTimeout(timerRef.current);
  }, [pathname, open]);

  // active = exact match for "/", prefix match for the rest
  const isActive = (to) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="Open menu" className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-luminousPink" />
      </SheetTrigger>

      <SheetContent className="flex flex-col" aria-label="Mobile menu">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Kavindi <span className="text-luminousPink">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-3 px-4">
          {links.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className="
                  w-full max-w-sm rounded-xl px-4 py-3 text-lg capitalize
                  transition-colors
                  hover:text-luminousPink
                  aria-[current=page]:bg-luminousPink
                  aria-[current=page]:text-primary
                "
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
