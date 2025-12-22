import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle';
import MovieCart from './MovieCart';
import { dummyBookingData } from '../../public/images/assets';

function FeaturedSection() {
    const navigate = useNavigate();
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
            <div className='relative flex items-center justify-between pt-20 pb-10'>
                <BlurCircle top='0' right='80px' />
                <p className='text-grey-300 font-medium text-lg'>Now Showing</p>
                <button onClick={() => navigate('/movies')} className='group cursor-pointer flex items-center gap-2 text-sm text-grey-300'>
                    View All
                    <ArrowRightCircleIcon className='group-hover:translate-x-0.5 transition w-4.5 h-4.5' />
                </button>
            </div>
            <div className='flex flex-row gap-3'>
                {dummyBookingData.slice(0, 4).map((show) => (
                    <MovieCart key={show.show._id} movie={show.show.movie} />
                ))}
            </div>
            <div className='flex justify-center mt-20'>
                <button onClick={() => { navigate('/movies'); scrollTo(0, 0) }} style={{ backgroundColor: "#f84565" }} className='nav-button px-10 py-3 text-sm transition rounded-md
                font-medium cursor-pointer'>Show more</button>
            </div>
        </div>
    )
}

export default FeaturedSection
