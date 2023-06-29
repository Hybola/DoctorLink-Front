import JobCard from './JobCard'
import { useSelector } from 'react-redux'

export default function ConfirmedJobBody() {
    const filterJob = useSelector(
        (state) => state.myjob?.confirmedJob?.filterJob
    )

    const jobList = filterJob.map((job) => (
        <JobCard job={job} key={job.doctorJobId} type={3} />
    ))

    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 rounded-b-lg    shadow-sm  p-[20px] min-h-[400px] max-h-[400px] h-[400px]  overflow-auto">
            {jobList}
        </div>
    )
}
