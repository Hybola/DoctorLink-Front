import ProviderProfile from '../features/profile/components/ProviderProfile'
import ProviderJobPost from '../features/providerjobpost/components/ProviderJobPost'
function JobPostPage() {
    return (
        <div className=" w-full  bg-base-100 flex flex-col items-center justify-center">
            <ProviderProfile />
            <ProviderJobPost />
        </div>
    )
}

export default JobPostPage
