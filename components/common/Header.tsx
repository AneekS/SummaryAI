import { FileText } from 'lucide-react';
import { Button } from "../ui/button";
import { NavLink } from "./nav-link";
import { SignedIn , SignedOut} from "@clerk/nextjs"; // enables authenticsaton an the only display certain features, accordingly.
import { UserButton } from "@clerk/nextjs";
export default function Header() {
 
    return (
        <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
  {/* by default providings  */}
          <div className="flex lg:flex-1">
            <NavLink  href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
              <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
              <span className="font-bold lg:text-xl text-gray-900">Sommaire</span>
            </NavLink>
          </div>
      
          <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
            <NavLink href="/#pricing">Pricing</NavLink>
             <SignedIn>
              {/* when signed in enables the certain features */}
              {/* if signed in then only Your Summaris section. */}
              <NavLink href="/dashboard">Your Summaries</NavLink>
             </SignedIn>
          </div>
            

          <div className="flex lg:flex-1 lg:justify-end gap-4">
           <SignedIn>
                {/* when user signed in , enable signed in features */}
                    <div className="flex gap-2 items-center ">
                        <NavLink href={"/upload"}>Upload a PDF</NavLink>
                        <div>Pro</div>
                        <SignedIn>
                  <UserButton />
            </SignedIn>
          </div>
            </SignedIn>
          {/* when user signed out show sign in button */}
          <SignedOut> 
            <NavLink href="/sign-in">Sign In</NavLink>
          </SignedOut>
      
          </div>
        </nav>
      );
      
}

