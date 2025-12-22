import React from 'react'
import { assets } from '../../public/images/assets'
import { ArrowRightCircleIcon, CalculatorIcon, ClockIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-start justify-center gap-4 px-6
    md:px-16 lg:px-36 bg-[url("/images/backgroundImage.png")] bg-cover bg-center h-screen'>

            <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20' />
            <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Guardians <br /> of the Galaxy</h1>
            <div className='flex items-center gap-4 text-grey-300'>
                <span>Action | Adventure | Sci-Fi</span>
                <div className='flex gap-2 items-center'>
                    <CalculatorIcon className='w-4.5 h-4.5' /> 2025
                </div>
                <div className='flex gap-2 items-center'>
                    <ClockIcon className='w-4.5 h-4.5' /> 2h 8m
                </div>
            </div>
            <p className='max-w-md text-grey-300'>In a post-apocalyptic world where cities ride on wheels and
                people consume each other to survive, two people meet in London and try to stop a
                conspiracy.</p>
            <button onClick={()=>navigate('/movies')} style={{ backgroundColor: "#f84565" }} className='nav-button flex items-center gap-1 px-6 py-3 text-sm 
                transition rounded-full font-medium cursor-pointer'>
                Explore Movies
                <ArrowRightCircleIcon className='w-5 h-5' />
            </button>
        </div>
    )
}

export default HeroSection
