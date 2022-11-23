import React from 'react'
import CountryInfoMenu from '../../components/CountryInfo/CountryInfoMenu'
import CountryInfoDisplay from './CountryInfoDisplay';
import { useState } from 'react'

export default function CountryInfo() {
    const [countryInfoButtonClicked, setCountryInfoButtonClicked] = useState(1);

    return (
        <div className='h-countryInfoHeight w-countryInfoWidth bg-white rounded-md shadow-2xl'>
            <CountryInfoMenu setClickedButton={setCountryInfoButtonClicked} countryInfoButtonClicked={countryInfoButtonClicked} />
            <div className='info h-countryInfoDisplayHeight w-full bg-green-500 flex justify-center items-center'>
                <CountryInfoDisplay optionSelected={countryInfoButtonClicked} />
            </div>
        </div>
    )
}
