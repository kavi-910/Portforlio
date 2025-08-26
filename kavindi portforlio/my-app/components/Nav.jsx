"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name:"home",
        path:"/",
    },
    {
        name:"services",
        path:"/services",
    },
    {
        name:"resume",
        path:"/resume",
    },
    {
        name:"work",
        path:"/work",
    },    
    {
        name:"contact",
        path:"/contact",
    },    

]

const Nav = () => {
const pathname = usePathname();
console.log(pathname);

    return ( <nav className="flex gap-8">
            {links.map((link, index)=>{
                return (
                <Link 
                    href={link.path} 
                    key={index} 
                    className={`${
                        link.path === pathname && "text-luminousPink border-b-2 border-luminousPink"
                    } capitalize font-medium hover:text-luminousPink transition-all`}
                >
                {link.name}
                </Link>
                );
            })}
            </nav>
            );
};    

export default Nav;
 

