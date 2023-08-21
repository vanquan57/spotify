import React, { useContext } from 'react'
import { Songs } from '../Context'
export default function DetailSong() {
    const { song } = useContext(Songs);
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-500 font-bold'>Now playing</h2>
            <h2 className='text-gray-500 text-2xl font-medium'>{song.name}</h2>
            <div className='w-[240px] h-[220px]  mx-auto mt-6 '>
                <img className='w-[100%] h-[100%] object-cover' src={song.links.images[0].url} alt='avatar' />
            </div>
            <div className='flex justify-evenly text-center mt-2 items-center'>
                <img className='w-[55px] rounded-full' src={song.links.images[1].url} alt='avatar CD' />
                <span className='text-[17px] font-semibold'>{song.author}</span>
            </div>
        </div>
    )
}
