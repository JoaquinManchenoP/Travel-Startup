import React from 'react'
import CountryInfoMenuButton from './CountryInfoMenuButton'

export default function CountryInfoMenu() {
    return (
        <div className='h-20 w-full overflow-auto bg-slate-200 rounded-md flex items-center'>
            <div className=' h-15 w-full ml-6 space-x-4 flex bg-green-300'>
                <div className='menu__option__1'>
                    <CountryInfoMenuButton buttonTitle={'Travel Requirements'} buttonSubtitle={'Find legal travel requirements'} />
                </div>
                <div className='menu__option__2'>
                    <CountryInfoMenuButton buttonTitle={'Costs'} buttonSubtitle={'Find travel & stay costs'} />
                </div>
            </div>
        </div>
    )
}
