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


  // control the drawer open/close
  const [open, setOpen] = useState(false);
 
  const CLOSE_DELAY = 5000; // ms
  const timerRef = useRef(null);
 
  // close automatically after route changes
  useEffect(() => {
    if (!open) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
    return () => clearTimeout(timerRef.current);
  }, [pathname, open]);


  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="Open menu" className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-luminousPink" />
      </SheetTrigger>


      {/* aria-label avoids the Radix DialogTitle warning */}
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
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => {
            const active = link.path === pathname;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`text-xl capitalize transition-all hover:text-luminousPink ${
                  active ? "text-luminousPink border-b-2 border-luminousPink" : ""
                }`}
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





