import SavedJobBody from './SavedJobBody'
import JobHeader from './JobHeader'

export default function SavedJob() {
    return (
        <div className="flex flex-col">
            <JobHeader myJob={1} />
            <hr />
            <SavedJobBody />
        </div>
    )
}
