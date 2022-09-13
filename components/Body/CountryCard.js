import React from 'react'

export default function CountryCard({ countryName }) {
    return (
        <div className='h-60 w-60 bg-purple-500 rounded-sm'>{countryName}</div>
    )
}
