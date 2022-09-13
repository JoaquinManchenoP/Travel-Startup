import React from 'react'
import JobCardContent from './jobCardContent'

export default function JobSideBarCard() {


    const jobCardData = [
        {
            title: 'software engineer',
            location: 'remote',
            id: 1,
        },
        {
            title: 'Video editor',
            location: 'remote',
            id: 2,
        },
        {
            title: 'Personal asistatne',
            location: 'remote',
            id: 3,
        },
        {
            title: 'Accountant',
            location: 'remote',
            id: 4
        },
        {
            title: 'Designer',
            location: 'remote',
            id: 5
        },
        {
            title: 'Designer',
            location: 'remote',
            id: 6
        },
        {
            title: 'Designer',
            location: 'remote',
            id: 7
        },
        {
            title: 'Designer',
            location: 'remote',
            id: 8
        },
        {
            title: 'Designer',
            location: 'remote',
            id: 9
        },
        {
            title: 'Designer',
            location: 'remote',
            id: 10
        },
        {
            title: 'Designer',
            location: 'remote',
            id: 11
        },
        {
            title: 'Designer',
            location: 'remote',
            id: 12
        },
        {
            title: 'Designer',
            location: 'remote',
            id: 13
        },
        {
            title: 'Designer',
            location: 'remote',
            id: 14
        },
    ]


    return (
        <div className='xsm:w-0 xsm:h-0 sm:w-0 sm:h-0 md:h-sideBarCardHeight md:w-full bg-slate-100 rounded-sm shadow-md flex flex-col items-center justify-center overflow-hidden '>
            <div className=' card__titile h-20 w-full flex items-center justify-center bg-purple-300 '>
                <span>card title</span>
            </div>
            <div className="card__content h-adCardContentHeight w-11/12  flex flex-col space-y-2  ">
                <div className='margin h-20 w-full space-y-3 mt-3  '>
                    {jobCardData.map((job) => (
                        <JobCardContent title={job.title} location={job.location} key={job.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}