import React from 'react'
import CountryPageLayout from '../../components/Layouts/CountryPageLayout'
import CountryInfo from './CountryInfo'

export default function CountryPage() {
    return (
        <CountryPageLayout>
            <div className='country__details__section h-64 w-full bg-green-500 xs:flex-col sm:flex '>
                <div className='country__flag__section h-full xs:w-full md:w-2/6 flex items-center justify-center bg-orange-500 '>
                    <div className='country__flag '>
                        <img className='object-cover h-56 w-72 rounded-md' src='https://cdn.britannica.com/49/149-004-986E1BD8/flag-design-similarities-Ecuador-Colombia-flags-Venezuela.jpg'></img>
                    </div>
                </div>
                <div className='country__details__section h-full xs:w-full sm:w-4/6 flex items-center justify-center'>
                    <div className='country__details h-5/6 w-5/6 bg-green-300'>
                        <div className='country__name h-16 6 w-full flex items-cente text-oswald text-title font-bold'>
                            <span>Ecuador</span>
                        </div>
                        <div className='country__details flex flex-col space-y-3 mt-3'>
                            <div className='country__continent space-x-1'>
                                <span className='text-lg text-roboto font-semibold'>Continent:</span>
                                <spam className='text-lg text-roboto font-light'>South America</spam>
                            </div>
                            <div className='country__population space-x-1'>
                                <span className='text-lg text-roboto font-semibold'>Population:</span>
                                <spam className='text-lg text-roboto font-light'>17.6M</spam>
                            </div>
                            <div className='country__currency space-x-1'>
                                <span className='text-lg text-roboto font-semibold'>Currency:</span>
                                <spam className='text-lg text-roboto font-light'>USD</spam>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='countryInfo h-full w-full bg-green-400 flex items-center justify-center'>
                <CountryInfo />
            </div>
        </CountryPageLayout>
    )
}

