import React from 'react'

export default function CountryHeader() {
    return (
        <div className='country__header h-72 w-full flex items-center'>
            <div className="flag__section h-64 xxs:w-0 xsm:w-0 sm:w-0 md:w-3/6 flex items-center justify-center">
                <img className='h-54 w-72 rounded-md' src='https://cdn.britannica.com/49/149-004-986E1BD8/flag-design-similarities-Ecuador-Colombia-flags-Venezuela.jpg'></img>
            </div>
            <div className="country__detaills__section h-64 xsm:w-full sm:w-full md:w-4/6 flex items-center justify-center">
                <div className="country__detail h-5/6 w-5/6 ml-12">
                    <div className="country__name">
                        <span className='font-oswald text-title'>Ecuador</span>
                    </div>
                    <div className="details space-y-2 mt-5">
                        <div className='country__continent space-x-1'>
                            <span className='text-xl font-oswald font-semibold'>Continent:</span>
                            <spam className='text-xl font-roboto font-light'>South America</spam>
                        </div>
                        <div className='country__population space-x-1'>
                            <span className='text-xl font-oswald font-semibold'>Population:</span>
                            <spam className='text-xl font-roboto font-light'>17.6M</spam>
                        </div>
                        <div className='country__currency space-x-1'>
                            <span className='text-xl font-oswald font-semibold'>Currency:</span>
                            <spam className='text-xl font-roboto font-light'>USD</spam>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
