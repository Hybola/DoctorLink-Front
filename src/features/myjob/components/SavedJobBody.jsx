import SavedJobCard from './SavedJobCard'
import { useDispatch, useSelector } from 'react-redux'
import { unSaveJob, uptoInterestJob } from '../slice/myjob-slice'

export default function SavedJobBody() {
    const allJob = useSelector((state) => state.myjob?.savedJob?.allJob)
    const filterJob = useSelector((state) => state.myjob?.savedJob?.filterJob)
    const interestJob = useSelector(
        (state) => state.myjob?.interestedJob?.allJob
    )

    const dispatch = useDispatch()

    const handleUnsave = (e) => {
        dispatch(unSaveJob({ id: e.target.id, allJob: allJob })).unwrap()
    }

    const handleinterestJob = (e) => {
        dispatch(
            uptoInterestJob({
                id: e.target.id,
                savedJob: allJob,
                interestJob: interestJob,
            })
        ).unwrap()
    }

    const jobList = filterJob.map((job) => (
        <SavedJobCard
            job={job}
            key={job.doctorJobId}
            type={1}
            handleClick1={handleUnsave}
            handleClick2={handleinterestJob}
        />
    ))

    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 rounded-b-lg    shadow-sm  p-[20px] min-h-[400px] max-h-[400px] h-[400px]  overflow-auto">
            {jobList}
        </div>
    )
}
