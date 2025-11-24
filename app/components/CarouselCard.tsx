

import Image from 'next/image'

import React from 'react'

interface CarouselCardProps {
    image: string
    title: string
    description: string
}

const CarouselCard: React.FC<CarouselCardProps> = ({ image, title, description }) => {
    return (
        <div className="flex flex-col text-gray-800  items-start gap-5 p-4 border border-gray-200 w-72 min-h-96  rounded-xl bg-white">
            <img src="/aksjer-sky-final.png" alt="stats" />

            <h1 className='text-3xl'>{title}</h1>
            <p className='text-md  font-light'>
                {description}
            </p>
        </div>
    )
}

export default CarouselCard