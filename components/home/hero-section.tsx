import { Button } from "../ui/button"
import { Sparkles } from "lucide-react"
import { Badge } from "../ui/badge"
import Link from "next/link";
import { ArrowRight } from 'lucide-react';


export default function HeroSection() {
    return (
      <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
        <div className="">
       
            <div
              className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group"
            >
              <Badge variant={'secondary'}
                className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
              >
                <Sparkles
                  className="h-8 w-8 mr-2 text-rose-600 animate-pulse"
                />
                <p className="text-base text-rose-600">Powered by AI</p>
              </Badge>
            </div>
          </div>
          <h1 className="flex items-center text-4xl mt-2"><span>Transform PDFs into {''} 
            <span>concise</span> summaries</span></h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg: max-w-4xl text-gray-600 mt-4">Get a beautiful summary reel of the document in seconds.</h2>
          <Button className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500
          hover:from-rose-500 hover:to-slate-950 hover:no-underline font-bold" variant={'link'}>
        <Link className="flex gap-2 items-center" href="/#pricing"><span>Try Sommaire</span>
        <ArrowRight className="animate-pulse"></ArrowRight>
        </Link>
          </Button>
     
      </section>
    );
  }
  