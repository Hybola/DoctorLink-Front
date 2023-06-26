import SavedJobCard from './SavedJobCard'

export default function SavedJobBody({ savedJob }) {
    const jobList = savedJob.map((job) => (
        <SavedJobCard job={job} key={job.id} />
    ))
    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 rounded-b-lg   shadow-sm h-fit p-[20px]">
            {jobList}
        </div>
    )
}
