import SavedJobBody from './SavedJobBody'

export default function SavedJob({ savedJob }) {
    return (
        <div className=" flex flex-col mt-4">
            <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100  rounded-t-lg  shadow-sm h-fit p-[20px]">
                My Saved Job 
            </div>
            <hr />
            <SavedJobBody savedJob={savedJob} />
        </div>
    )
}
