import ConfirmedJobBody from './ConfimedJobBody'
import JobHeader from './JobHeader'

export default function InterestedJob() {
    return (
        <div className="flex flex-col">
            <JobHeader myJob={3} />
            <hr />
            <ConfirmedJobBody />
        </div>
    )
}
