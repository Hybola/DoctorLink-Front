import SavedJobCard from './SavedJobCard'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function SavedJobBody() {
    const filterJob = useSelector((state) => state.myjob?.savedJob.filterJob)

    const jobList = filterJob.map((job) => (
        <SavedJobCard job={job} key={job.savedJobId} />
    ))

    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 rounded-b-lg    shadow-sm  p-[20px] min-h-[400px] max-h-[400px] h-[400px]  overflow-auto">
            {jobList}
        </div>
    )
}
