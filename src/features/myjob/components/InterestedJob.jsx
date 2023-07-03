import InterestedJobBody from './InterestedJobBody'
import JobHeader from './JobHeader'

export default function InterestedJob() {
    return (
        <div className="flex flex-col">
            <JobHeader myJob={2} />
            <hr />
            <InterestedJobBody />
        </div>
    )
}
