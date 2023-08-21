import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Songs } from '../Context';

export default function ListSong() {
    const { DataSongs, song ,handlSetSong} = useContext(Songs);
    const [idSong, setidSong] = useState(0)
    const handlePlaySong =(idSong) => {
        setidSong(idSong);
        handlSetSong(idSong);
    }
    useEffect(() => {
        setidSong(song.id);
    }, [song])
    return (
        <div className='col-span-2 overflow-y-scroll'>
            <table className='table-auto w-full '>
                <thead className='text-white h-12'>
                    <tr>
                        <th className='w-[10%]'>STT</th>
                        <th className='text-left'>Title</th>
                        <th className='w-[13%]'>Author</th>
                        <th className='w-[10%]'><i className='fa fa-download'></i></th>
                    </tr>
                </thead>
                <tbody className='bg-slate-800 text-gray-500 ' >
                    {
                        DataSongs.map((song, index) => (
                            <tr key={index}
                             className={`h-12 hover:bg-[#475569] hover:cursor-pointer
                             ${idSong === song.id && 'text-emerald-500 font-semibold bg-[#475569]'}` }
                              onClick={() => handlePlaySong(song.id)}>
                                <td className='text-center'>{index}</td>
                                <td>{song.name}</td>
                                <td className='text-center'>{song.author}</td>
                                <td className='text-center'><a href={song.url}><i className='fa fa-download hover:text-white'></i></a></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
