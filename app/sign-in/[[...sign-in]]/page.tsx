import { SignIn } from '@clerk/nextjs'
import BgGradient from '@/components/common/bg-gradient'
export default function Page() {

  return (
    <section className='flex justify-center items-center lg:min-h-[40vh]'>
        <div className='py-12 lg:py-24 max-w-5xl max-auto px-4 sm:px-6 lf:px-8 lg:pt-12'>
            <BgGradient className='from-rose-400 via-rose-300 to-orange-200'></BgGradient>
            <SignIn></SignIn>
        </div>
    </section>
  )
}