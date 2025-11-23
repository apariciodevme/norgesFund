import { IconArrowNarrowRight } from '@tabler/icons-react';
import { ChevronRightSmall } from 'akar-icons';
import Link from 'next/link'


type Props = {
    title: string;
    text: string;
    linkText: string;
}



const TextBlock = ({title, text, linkText}: Props) => {
  return (
    <div className='bg-slate-100 text-gray-600 flex flex-col items-start gap-5 pt-20 p-5'>
        <h1 className='text-3xl '>{title}</h1>

        <p className='text-gray-500'>{text}</p>
        
        <div className='flex items-center gap-3 cursor-pointer'>
        <Link className=' border-b border-gray-400 text-lg text-gray-800 font-light' href={'/'}>{linkText}</Link>
        <ChevronRightSmall className='text-gray-700 w-4 h-4'/>
        
        </div>
    </div>
  )
}

export default TextBlock