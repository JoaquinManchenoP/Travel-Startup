import React from 'react';
import CountryPageLayout from '../../components/Layouts/CountryPageLayout';
import CountryInfo from './CountryInfo';
import CountryHeader from './CountryHeader';


export default function CountryPage() {
    return (
        <CountryPageLayout>
            <CountryHeader />
            <div className='countryInfo h-full w-full xs:mt-10 md:xs:mt-0  flex items-center justify-center'>
                <CountryInfo />
            </div>
        </CountryPageLayout>
    )
}

