import SavedJobBody from './SavedJobBody'
import SavedJobHeader from './SavedJobHeader'

export default function SavedJob() {
    return (
        <div className="flex flex-col mt-4">
            <SavedJobHeader />
            <hr />
            <SavedJobBody />
        </div>
    )
}
