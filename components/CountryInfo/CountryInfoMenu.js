import React from 'react'
import CountryInfoMenuButton from './CountryInfoMenuButton'

export default function CountryInfoMenu({ setClickedButton, countryInfoButtonClicked }) {

    const buttonClicked = () => {
        setClickedButton('goodbye');
    }
    console.log(countryInfoButtonClicked);

    return (
        <div className='h-20 w-full overflow-scroll overflow-y-hidden bg-slate-200 rounded-md flex items-center'>
            <div className=' h-15 w-full ml-6 space-x-4 flex'>
                <div className='menu__option__1'
                    onClick={buttonClicked}
                >
                    <CountryInfoMenuButton
                        buttonTitle={'Travel Requirements'}
                        buttonSubtitle={'Find legal travel requirements'}
                    />
                </div>
                <div className='menu__option__2'>
                    <CountryInfoMenuButton buttonTitle={'Info'} buttonSubtitle={'General Information'} />
                </div>
                <div className='menu__option__3'>
                    <CountryInfoMenuButton buttonTitle={'Costs of Travel'} buttonSubtitle={'Find travel & stay costs'} />
                </div>
                <div className='menu__option__4'>
                    <CountryInfoMenuButton buttonTitle={'Weather'} buttonSubtitle={'Weather and climate patters'} />
                </div>
                <div className='menu__option__5'>
                    <CountryInfoMenuButton buttonTitle={'Costs of Living'} buttonSubtitle={'Cost of Living'} />
                </div>
                <div className='menu__option__6'>
                    <CountryInfoMenuButton buttonTitle={'Places to visit'} buttonSubtitle={'The most popular places to visit'} />
                </div>
                <div className='menu__option__7'>
                    <CountryInfoMenuButton buttonTitle={'Remote Work'} buttonSubtitle={'Find remote jobs'} />
                </div>
            </div>
        </div>
    )
}
