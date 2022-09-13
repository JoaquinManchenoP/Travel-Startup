import React from 'react'
import CountryCard from './CountryCard'

export default function Body() {

    let countries = [
        {
            countryName: 'United States',
            countryFlag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
            countryId: 1
        },
        {
            countryName: 'Spain',
            countryFlag: 'https://media.istockphoto.com/vectors/vector-flag-of-spain-proportion-23-spanish-national-bicolor-flag-vector-id967321166?k=20&m=967321166&s=612x612&w=0&h=yLqa0s16OZSNNRAFbNw6EOCKCsRE2aYRhjekTiITdX4=',
            countryId: 2
        },
        {
            countryName: 'Italy',
            countryFlag: 'https://media.istockphoto.com/photos/italian-flag-picture-id516545774?b=1&k=20&m=516545774&s=170667a&w=0&h=cgjGHUeq5AqufdbUTt_Dmc6OWNODiXpjTL2prDHktwQ=',
            countryId: 3
        },
        {
            countryName: 'United Kingdom',
            countryFlag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png',
            countryId: 4
        },
        {
            countryName: 'France',
            countryFlag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png',
            countryId: 5
        },
        {
            countryName: 'Germany',
            countryFlag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
            countryId: 6
        },
        {
            countryName: 'Canada',
            countryFlag: 'https://www.worldatlas.com/img/flag/ca-flag.jpg',
            countryId: 7
        },
        {
            countryName: 'Japan',
            countryFlag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png',
            countryId: 8
        },
        {
            countryName: 'China',
            countryFlag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png',
            countryId: 9
        },
    ]


    return (
        <div className='h-full xsm:w-full sm:wfull md:w-10/12 flex flex-col items-center justify-center'>
            <div className='grid xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {countries.map((country) => (
                    <div key={country.countryId} >
                        <CountryCard countryName={country.countryName} countryFlag={country.countryFlag} />
                    </div>
                ))}
            </div>
        </div>
    )
}
