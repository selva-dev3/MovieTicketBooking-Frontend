import { StarIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat';

function MovieCart({ movie }) {
    const navigate = useNavigate();
  

    return (
        <div style={{ backgroundColor: "#1f2937" }} className='flex flex-col justify-center  p-3 bg-grey-800 rounded-2xl
    hover:-translate-y-1 transition duration-300 w-66'>

            <img onClick={() => { navigate(`/movies/${movie._id}`); scrollTo(0, 0) }} src={movie.backdrop_path} alt="" className='rounded-lg h-52 w-full
      object-cover object-right-bottom cursor-pointer' />

            <p className='font-semibold mt-2 truncate'>{movie.title}</p>

            <p className='text-sm text-grey-400 mt-2'>
                {new Date(movie.release_date).getFullYear()} + {movie.genres.slice((0, 2))
                    .map(genre => genre.name).join(" | ")} + {timeFormat(movie.runtime)}
            </p>
            <div className='flex items-center justify-between mt-4 pb-3'>
                <button onClick={() => { navigate(`/movies/${movie._id}`); scrollTo(0, 0) }} style={{ backgroundColor: "#f84565" }} className='nav-button px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition
                rounded-full font-medium cursor-pointer'>
                    Buy Tickets
                </button>
                <p className='flex items-center gap-1 text-sm text-grey-400 mt-1 pr-1'>
                    <StarIcon onClick={()=>setClick(true)} style={{
                        color: "#f84565", fill: "var(--color-primary)"
                    }} className={`w-4 h-4 text-[#f84565] fill-[#f84565]`} />
                    {movie.vote_average.toFixed(1)}
                </p>
            </div>
        </div>
    )
}

export default MovieCart
