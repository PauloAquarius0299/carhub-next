"use client"

import {useState} from 'react'
import Image from 'next/image'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'
import CarDetails from './CarDetails'
import steering from '../public/steering-wheel.svg'
import tire from '../public/tire.svg'
import gas from '../public/gas.svg'
import rightArrow from '../public/right-arrow.svg'

interface CarCardProps {
    car: CarProps;
}

const CarCard =({ car }: CarCardProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car;

    const [isOpen, setIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year);

    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {make} {model}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'>$ </span>
                    {carRent}
               <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src={generateCarImageUrl(car)} alt='car model' fill className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src={steering} width={20} height={20} alt='streeing wheel' /> 
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className='car-card__icon'>
                        <Image src={tire} width={20} height={20} alt='seat' />
                        <p className='card-card__icon-text'>{drive.toUpperCase()}</p>
                    </div>
                    <div className='car-card__icon'>
                        <Image src={gas} width={20} height={20} alt='seat' />
                        <p className='car-card__icon-text'>{city_mpg} MPG</p>
                    </div>
                </div>

                <div className='car-card__btn-container'>
                    <CustomButton 
                    title='View More'
                    containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    rightIcon={rightArrow}
                    handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} /> 
        </div>
    );
};

export default CarCard;