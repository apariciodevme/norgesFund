import Image from 'next/image'
import React from 'react'
// import { CountingNumber } from '@/components/ui/shadcn-io/counting-number'
import Background from './Background'
import { CountingNumber } from '@/components/ui/shadcn-io/counting-number'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { IconArrowNarrowRight } from '@tabler/icons-react'




const Hero = () => {
    return (

        <div className='h-screen w-full flex flex-col items-center  relative'>
            <Background />



            <div className="flex text-black text-center absolute  p-10 gap-5 flex-col items-center h-screen w-full">
                <div className='flex items-center relative justify-between gap-2'>
                    <h2 className=' text-xs font-semibold uppercase'> The funds value</h2>
                    <div className='relative flex items-center'>
                        <div className='blinking-dot w-3 h-3 bg-blue-500 rounded-full z-0 absolute animate-ping' />
                        <span className='blinking-dot w-3 h-3 rounded-full bg-blue-700 z-10 absolute'></span>
                    </div>

                </div>
                <div>

                    <CountingNumber
                        className='font-bold text-5xl '
                        number={20689958820490}
                        fromNumber={20630958820490}
                        inView={true}
                        transition={{ stiffness: 1, damping: 10, }}
                    />




                    <span className='text-sm  font-bold uppercase'>nok</span>
                </div>
                <div className='sepataror w-8 border-b border-gray-400 '></div>
                <div>
                    <p className='text-center text-wrap w-3xs text-lg font-light '>We work to safeguard and build financial wealth for future generations</p>
                </div>

                
                    <button
                    className='flex mt-96 items-center font-light p-3 group relative px-6 gap-1 rounded-full backdrop-blur-md bg-white/10 border text-slate-600 border-white/20 shadow-md hover:bg-white/30 transition-all cursor-pointer duration-300 text-lg' 
                    >Value development
                    <IconArrowNarrowRight className='w-5 h-5 text-slate-600 transition-transform duration-300 group-hover:translate-x-2'/>
                    </button>
                


            </div>

        </div>


    )
}

export default Hero