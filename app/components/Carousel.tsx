'use client'

import React, { useEffect, useState } from 'react'
import CarouselCard from './CarouselCard'

const carouselData = [
  {
    image: '/aksjer-sky-final.png',
    title: 'Aksjer',
    description: 'Den største delen av fondet er investert i aksjer, som er eierandeler i rundt 8 500 selskaper'
  },
  {
    image: '/eiendom-sky-final.png',
    title: 'Eiendom',
    description: 'Fondet investerer i eiendom i utvalgte byer i Europa, Asia og USA'
  },
  {
    image: '/infrastruktur-fornybar-energi-sky-final.png',
    title: 'Infrastruktur fornybar energi',
    description: 'Fondet investerer i infrastruktur for fornybar energi for å støtte bærekraftig utvikling'
  },
  {
    image: '/rentepapirer-sky-final.png',
    title: 'Rentepapirer',
    description: 'Fondet holder også rentepapirer som gir stabilitet og diversifisering til porteføljen'
  }
]

const getCardsPerView = (width: number) => {
  if (width >= 1280) return 3
  if (width >= 768) return 2
  return 1
}

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window === 'undefined') return
      setCardsPerView(getCardsPerView(window.innerWidth))
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  useEffect(() => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex, Math.max(0, carouselData.length - cardsPerView))
    )
  }, [cardsPerView])
{/*set cards per view*/}
  const maxIndex = Math.max(0, carouselData.length - cardsPerView)
  const slideWidth = 60 / cardsPerView

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === maxIndex ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  return (
    <div className='relative w-full bg-stone-100 p-10'>
      <div className='relative overflow-hidden'>
        <div 
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
        >
          {carouselData.map((item, index) => (
            <div 
              key={index} 
              className='px-4'
              style={{ flex: `0 0 ${slideWidth}%` }}
            >
              <CarouselCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow-lg transition-all duration-200 z-10'
        aria-label='Previous slide'
      >
        <svg className='w-6 h-6 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow-lg transition-all duration-200 z-10'
        aria-label='Next slide'
      >
        <svg className='w-6 h-6 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
        </svg>
      </button>

      {/* Indicators */}
      <div className='flex justify-center gap-2 mt-6'>
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-gray-700' 
                : 'w-2 bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel