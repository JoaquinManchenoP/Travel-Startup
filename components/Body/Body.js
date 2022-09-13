import React from 'react'
import CountryCard from './CountryCard'

export default function Body() {

    let countries = [
        {
            countryName: 'United States',
            countryId: 1
        },
        {
            countryName: 'Spain',
            countryId: 2
        },
        {
            countryName: 'Italy',
            countryId: 3
        },
        {
            countryName: 'United Kingdom',
            countryId: 4
        },
        {
            countryName: 'France',
            countryId: 5
        },
        {
            countryName: 'Germany',
            countryId: 6
        },
        {
            countryName: 'Canada',
            countryId: 7
        },
    ]


    return (
        <div className='h-full xsm:w-full sm:wfull md:w-10/12 flex flex-col items-center justify-center'>
            <div className='grid xsm:grid-cols-2 sm:grid-cols-2  md:grid-cols-3 gap-5'>
                {countries.map((country) => (
                    <div key={country.countryId} >
                        <CountryCard countryName={country.countryName} />
                    </div>
                ))}
            </div>
        </div>
    )
}
