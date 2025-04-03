"use client"
// client side rendering : useHook() used.

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { text } from "stream/consumers";

//additional hover effect, multiple used time.
// My own custom made LINK with wrapups.
//under the  hood Native Link is used.
export const NavLink = ({ href, children ,className }: { href: string; children: React.ReactNode ,className?: string }) => {  const pathname = usePathname();
    //return current route
    const isActive = pathname===href || (href !== '/' && pathname.startsWith(href));   
    
    //main functionalty 
    //uses native LINK 
    return (
        <Link href={href} className={cn("transition-colors text-sm duration-300 hover:text-rose-500", className,isActive && 'text-rose-500')}>{children}</Link>
    )
}
