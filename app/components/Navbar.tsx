import { IconMenu2 } from '@tabler/icons-react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-16 border-b border-slate-200  flex items-center justify-between w-full bg-white p-5'>
        <div>
        <Image
        src={'/logo.svg'}
        width={100}
        height={100}
        alt='logo'
        
        />
        </div>
        <div>

        <IconMenu2 className='text-black w-4 h-4' stroke={2} />
        </div>
       
    </div>
  )
}

export default Navbar