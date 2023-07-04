import ProviderProfile from '../features/profile/components/ProviderProfile'
import ProviderJobPost from '../features/providerjobpost/components/ProviderJobPost'
import JobPost from '../features/providerjobpost/components/JobPost'
function JobPostPage() {
    return (
        <div className=" w-full  bg-base-100 flex flex-col items-center justify-center">
            {/* <ProviderProfile />
            <ProviderJobPost /> */}
            <JobPost postId={1} providerId={1} />
        </div>
    )
}

export default JobPostPage
