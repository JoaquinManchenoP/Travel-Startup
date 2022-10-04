import React from 'react'

export default function CountryPageLayout({ children }) {
    return (
        <div className='flex items-center justify-center w-screen h-screen '>
            <div className='h-full main__container w-layoutWidth bg-red-500'>
                <div className='logo h-16 w-full bg-purple-400'>
                </div>
                <div className='country__details__section h-64 w-full bg-green-500 flex'>
                    <div className='country__flag h-full w-72 bg-orange-500'>
                        Ecuador
                    </div>
                    <div className='country__details'>
                        <div className='country__name'>
                            Ecuador
                        </div>
                        <div className='country__continent'>
                            South America
                        </div>
                        <div className='country__population'>
                            16.5M
                        </div>
                        <div>
                            Travel requirement diffculty 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
