"use client"

import Image from 'next/image'
import React from 'react'
import  CustomButton  from "./CustomButton"
import hero from '@/public/hero.png'

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById('discover')

        if (nextSection){
            nextSection.scrollIntoView({behavior: 'smooth'})
        }
    };

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            Encontre, reserve e alugue um carro rápido e super fácil
            </h1>

            <p className='hero__subtitle'>
            Simplifique sua experiência de aluguel de carro com nosso processo de reserva fácil.
            </p>
            <CustomButton 
            title='Explore Carros'
            containerStyles='bg-primary-blue text-white rounded-full mt-10 '
            handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src={hero} 
                alt='hero' 
                fill 
                className='object-contain' />
            </div>

            <div className='hero__image-overlay' />
        </div>
    </div>
  )
}

export default Hero