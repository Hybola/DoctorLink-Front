import JobCard from './JobCard'
import { useDispatch, useSelector } from 'react-redux'
import { unInterestJob } from '../slice/myjob-slice'

export default function InterestedJobBody() {
    const allJob = useSelector((state) => state.myjob?.interestedJob?.allJob)
    const filterJob = useSelector(
        (state) => state.myjob?.interestedJob?.filterJob
    )
    const savedJob = useSelector((state) => state.myjob?.savedJob?.allJob)

    const dispatch = useDispatch()

    const handleUninterestJob = (e) => {
        dispatch(
            unInterestJob({
                id: e.target.id,
                interestedJob: allJob,
                savedJob: savedJob,
            })
        ).unwrap()
    }

    const jobList = filterJob.map((job) => (
        <JobCard
            job={job}
            key={job.doctorJobId}
            type={2}
            handleClick1={handleUninterestJob}
        />
    ))

    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 rounded-b-lg    shadow-sm  p-[20px] min-h-[400px] max-h-[400px] h-[400px]  overflow-auto">
            {jobList}
        </div>
    )
}
