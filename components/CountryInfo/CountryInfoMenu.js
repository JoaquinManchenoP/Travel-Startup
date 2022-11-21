import React from 'react'
import CountryInfoMenuButton from './CountryInfoMenuButton'

export default function CountryInfoMenu({ setClickedButton, countryInfoButtonClicked }) {

    const optionSelected = (optionNumber) => {
        switch (optionNumber) {
            case 1:
                setClickedButton(1);
                break;
            case 2:
                setClickedButton(2);
                break;
            case 3:
                setClickedButton(3);
                break;
            case 4:
                setClickedButton(4);
                break;
            case 5:
                setClickedButton(5);
                break;
            case 6:
                setClickedButton(6);
                break;
            case 7:
                setClickedButton(7);
                break;
        }
    }

    return (
        <div className='h-20 w-full overflow-scroll overflow-y-hidden bg-slate-200 rounded-md flex items-center'>
            <div className=' h-15 w-full ml-6 space-x-4 flex'>
                <div className='menu__option__1'
                    onClick={() => optionSelected(1)}
                >
                    <CountryInfoMenuButton
                        buttonTitle={'Travel Requirements'}
                        buttonSubtitle={'Find legal travel requirements'}
                    />
                </div>
                <div className='menu__option__2'
                    onClick={() => optionSelected(2)}
                >
                    <CountryInfoMenuButton buttonTitle={'Info'} buttonSubtitle={'General Information'} />
                </div>
                <div className='menu__option__3'
                    onClick={() => optionSelected(3)}
                >
                    <CountryInfoMenuButton buttonTitle={'Cost of Travel'} buttonSubtitle={'Find travel & stay costs'} />
                </div>
                <div className='menu__option__4'
                    onClick={() => optionSelected(4)}
                >
                    <CountryInfoMenuButton buttonTitle={'Weather'} buttonSubtitle={'Weather and climate patters'} />
                </div>
                <div className='menu__option__5'
                    onClick={() => optionSelected(5)}
                >
                    <CountryInfoMenuButton buttonTitle={'Cost of Living'} buttonSubtitle={'Cost of Living'} />
                </div>
                <div className='menu__option__6'
                    onClick={() => optionSelected(6)}
                >
                    <CountryInfoMenuButton buttonTitle={'Places to visit'} buttonSubtitle={'The most popular places to visit'} />
                </div>
                <div className='menu__option__7'
                    onClick={() => optionSelected(7)}>
                    <CountryInfoMenuButton buttonTitle={'Remote Work'} buttonSubtitle={'Find remote jobs'} />
                </div>
            </div>
        </div>
    )
}
