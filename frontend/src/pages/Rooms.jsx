import React from 'react'
import Card from './components/Card'

const Rooms = () => {
    return (
        <div className='h-screen overflow-hidden'>
            <div className='flex justify-center gap-4 px-2 py-2 items-center h-full'>
                 <div className=' h-full w-[70%] overflow-y-auto space-y-4 p-3 scrollbar-none'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

                <div className='bg-red-200 w-[30%] h-[20vh]'></div>
            </div>
        </div>
    )
}

export default Rooms