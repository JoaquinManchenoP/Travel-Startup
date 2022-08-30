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
        <div className='h-sideBarCardHeight w-full bg-slate-200 rounded-sm shadow-md flex items-center justify-center scrollbar-rounded  '>
            <div className="card__content h-adCardContentHeight w-11/12  flex flex-col space-y-2 overflow-hidden scrollbar hover:scrollbar-thin hover:scrollbar-thumb-pink-300 hover:scrollbar-track-transparent scrollbar-thumb-rounded-md ">
                <div className='margin h-20 w-ful  space-y-3 '>
                    <div className='h-16 w-full bg-purple-300'>card title</div>
                    {jobCardData.map((job, idx) => (
                        <JobCardContent title={job.title} location={job.location} key={job.idx} />
                    ))}
                </div>
            </div>
        </div>
    )
}
// {jobCardData.map(job => {
//     <span>{console.log(job.title)}</span>
// })}