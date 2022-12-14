import React from 'react'

export default function JobCardContent({ title, location }) {
    return (
        <div className='h-12 w-full rounded-sm bg-white'>
            <span>{location}</span>
            <span>{title}</span>
        </div>
    )
}
