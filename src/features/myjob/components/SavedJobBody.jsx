import SavedJobCard from './SavedJobCard'
import { useSelector } from 'react-redux'

export default function SavedJobBody() {
    const savedJob = useSelector((state) => state.myjob?.savedJob)

    const jobList = savedJob.map((job) => (
        <SavedJobCard job={job} key={job.id} />
    ))

    console.log(jobList)

    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 rounded-b-lg   shadow-sm h-fit p-[20px] min-h-[400px] max-h-[400px] overflow-auto">
            {jobList}
        </div>
    )
}
