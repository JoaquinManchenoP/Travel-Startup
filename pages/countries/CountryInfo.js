import React from 'react'
import CountryInfoMenu from '../../components/CountryInfo/CountryInfoMenu'
import { useState } from 'react'

export default function CountryInfo() {
    const [countryInfoButtonClicked, setCountryInfoButtonClicked] = useState('hello');
    console.log(countryInfoButtonClicked);

    return (
        <div className='h-countryInfoHeight w-countryInfoWidth bg-white rounded-md shadow-2xl'>
            <CountryInfoMenu setClickedButton={setCountryInfoButtonClicked} countryInfoButtonClicked={countryInfoButtonClicked} />
        </div>
    )
}
