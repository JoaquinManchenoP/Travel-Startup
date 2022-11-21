import React from 'react';
import TravelRequirements from './InfoOptions/TravelRequirements';
import GeneralInformation from './InfoOptions/GeneralInformation';
import CostOfTravel from './InfoOptions/CostOfTravel';
import CountryWeather from './InfoOptions/CountryWeather';
import CostOfLiving from './InfoOptions/CostOfLiving';
import PlacesToVisit from './InfoOptions/PlacesToVisit';
import RemoteWork from './InfoOptions/RemoteWork';

export default function CountryInfoDisplay({ optionSelected }) {
    return (
        <div className='h-full w-full flex '>
            {optionSelected <= 1 && (
                <TravelRequirements />
            )}
            {optionSelected === 2 && (
                <GeneralInformation />
            )}
            {optionSelected === 3 && (
                <CostOfTravel />
            )}
            {optionSelected === 4 && (
                <CountryWeather />
            )}
            {optionSelected === 5 && (
                <CostOfLiving />
            )}
            {optionSelected === 6 && (
                <PlacesToVisit />
            )}
            {optionSelected === 7 && (
                <RemoteWork />
            )}
        </div>
    )
}
