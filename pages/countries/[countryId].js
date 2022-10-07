import React from 'react'
import CountryPageLayout from '../../components/Layouts/CountryPageLayout'
import CountryPageFilters from '../../components/FilterSection/CountryPageFilters'


export default function CountryPage() {
    return (
        <CountryPageLayout>
            <div className='country__details__section h-64 w-full bg-green-500 flex'>
                <div className='country__flag__section h-full w-2/6 flex items-center justify-center bg-orange-500 '>
                    <div className='country__flag h-56 w-56 rounded-md bg-yellow-500'>
                    </div>
                </div>
                <div className='country__details__section h-full w-4/6 flex items-center justify-center'>
                    <div className='country__details h-5/6 w-5/6 bg-green-300'>
                        <div className='country__name h-16 6 w-full flex items-center'>
                            <h1 className='text-xxl'>Ecuador</h1>
                        </div>
                        <div className='country__continent h-12 w-full flex items-center space-x-1'>
                            <span>Continent:</span>
                            <span>South America</span>
                        </div>
                        <div className='country__population h-12 w-full flex items-center space-x-1'>
                            <span>Population:</span>
                            <span>17.2M</span>
                        </div>
                        <div className='country__saftey h-12 w-full flex items-center space-x-1'>
                            <span>Saftey:</span>
                            <span>5/10</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='filters'>
                <CountryPageFilters />
            </div>
        </CountryPageLayout>
    )
}

