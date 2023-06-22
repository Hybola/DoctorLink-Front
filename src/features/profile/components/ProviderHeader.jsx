import ProviderCoverImageEdit from './CoverImageEdit'
import ProviderProfileImageEdit from './ProviderProfileImageEdit'
export default function ProviderHeader({ profile, user }) {
    const defaultCoverImage =
        'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1685524621/gqjpy7avowkrwuzlnqju.jpg'
    const defaultProfileImage = ''
    const currentCoverImage = profile?.coverImagePath || defaultCoverImage
    const currentProfileImage = profile?.profileImagePath || defaultProfileImage
    const handleCoverImageEdit = () => window.CoverImageEdit.showModal()
    const handleProfileImageEdit = () => {
        if (user?.userId == profile?.userId)
            window.ProviderProfileImageEdit.showModal()
    }
    return (
        <div className=" h-[220px] mb-[40px]">
            <div className="w-full h-[200px] bg-base-300 rounded-t-lg">
                <img
                    src={profile?.coverImagePath || defaultCoverImage}
                    alt="coverImage"
                    className="w-full h-[200px] rounded-t-lg object-cover"
                />
            </div>
            {user?.userId == profile?.userId ? (
                <div className="w-full flex  flex-col  items-end">
                    <div
                        className="bg-base-100 w-[40px] h-[40px] rounded-[50%]  -my-[160px] mr-[20px] flex justify-center  items-center"
                        onClick={handleCoverImageEdit}
                    >
                        <div>Edit</div>
                        <ProviderCoverImageEdit
                            currentImage={currentCoverImage}
                        />
                    </div>
                </div>
            ) : null}
            <div>
                <div className="w-[150px] h-[150px] bg-info -my-[114px] ml-[28px] shadow-lg flex justify-center items-center ">
                    <img
                        src={currentProfileImage}
                        alt="profileImage"
                        className="w-[150px] h-[150px] object-cover"
                        onClick={handleProfileImageEdit}
                    />
                </div>
                <ProviderProfileImageEdit currentImage={currentProfileImage} />
            </div>
            <div className="w-full flex flex-col  gap-2">
                <div className="w-[200px] h-[10px] ml-[200px] mt-[80px] flex justify-start gap-2">
                    <div className="flex justify-start gap-1">
                        <div>{profile.follower}</div>
                        <div>follower</div>
                    </div>
                </div>
                {user?.userId != profile?.userId ? (
                    <div className="w-[200px] h-[14px] ml-[200px] mt-[8px]">
                        <button className="btn-primary text-white hover:bg-success hover:text-white max-h-[24px]  rounded-lg min-h-[14px] font-normal px-[4px] ">
                            Follow
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
