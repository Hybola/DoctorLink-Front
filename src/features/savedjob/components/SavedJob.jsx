import SavedJobBody from './SavedJobBody'
import SavedJobHeader from './SavedJobHeader'

export default function SavedJob({ savedJob }) {
    return (
        <div className=" flex flex-col mt-4">
            <SavedJobHeader />
            <hr />
            <SavedJobBody savedJob={savedJob} />
        </div>
    )
}
