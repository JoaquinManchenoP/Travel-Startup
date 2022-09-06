import React from 'react'
import JobCardContent from './jobCardContent'

export default function JobSideBarCard() {


    const jobCardData = [
        {
            title: 'software engineer',
            location: 'remote',
        },
        {
            title: 'Video editor',
            location: 'remote',
        },
        {
            title: 'Personal asistatne',
            location: 'remote',
        },
        {
            title: 'Accountant',
            location: 'remote',
        },
        {
            title: 'Designer',
            location: 'remote',
        },
        {
            title: 'Designer',
            location: 'remote',
        },
        {
            title: 'Designer',
            location: 'remote',
        },
        {
            title: 'Designer',
            location: 'remote',
        },
        {
            title: 'Designer',
            location: 'remote',
        },
        {
            title: 'Designer',
            location: 'remote',
        },
        {
            title: 'Designer',
            location: 'remote',
        },
        {
            title: 'Designer',
            location: 'remote',
        },
        {
            title: 'Designer',
            location: 'remote',
        },
        {
            title: 'Designer',
            location: 'remote',
        },
    ]


    return (
        <div className='h-sideBarCardHeight w-full bg-slate-100 rounded-sm shadow-md flex flex-col items-center justify-center  '>
            <div className=' card__titile h-20 w-full flex items-center justify-center bg-purple-300 '>card title</div>
            <div className="card__content h-adCardContentHeight w-11/12  flex flex-col space-y-2  ">
                <div className='margin h-20 w-full space-y-3 mt-3  '>
                    {jobCardData.map((job, index) => (
                        <JobCardContent title={job.title} location={job.location} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}