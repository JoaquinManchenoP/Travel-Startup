import React from 'react';

export default function CountryWeather() {
    return (
        <div className='h-full w-full flex flex-row'>
            <div className='right__section h-full w-1/2 bg-blue-500'>
                <div className='title'>
                    <span className='text-xxl font-oswald'>Weather</span>
                </div>
            </div>
            <div className='left__section h-full w-1/2 bg-red-500'>

            </div>
        </div>
    )
}
