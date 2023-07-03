import ProviderCoverImageEdit from './CoverImageEdit'
import ProviderProfileImageEdit from './ProviderProfileImageEdit'
import { PenIcon } from '../../../icons'
import { useDispatch, useSelector } from 'react-redux'

export default function ProviderHeader({
    profile,
    canEdit,
    follow,
    handdleFollow,
    handdleUnFollow,
}) {
    const myRole = useSelector((state) => state.auth?.role)

    const defaultCoverImage =
        'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1685524621/gqjpy7avowkrwuzlnqju.jpg'
    const defaultProfileImage =
        'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687202073/Screen_Shot_2566-06-20_at_02.13.58_tncfxz.png'
    const currentCoverImage = profile?.coverImage || defaultCoverImage
    const currentProfileImage = profile?.profileImage || defaultProfileImage

    const handleCoverImageEdit = () => window.CoverImageEdit.showModal()
    const handleProfileImageEdit = () => {
        if (canEdit) window.ProviderProfileImageEdit.showModal()
    }

    return (
        <div className=" h-[220px] mb-[40px]">
            <div className="w-full h-[200px] bg-base-300 rounded-t-lg">
                <img
                    src={currentCoverImage}
                    alt="coverImage"
                    className="w-full h-[200px] rounded-t-lg object-cover"
                />
            </div>
            {canEdit ? (
                <div className="w-full flex  flex-col  items-end">
                    <div
                        className="bg-base-100 w-[40px] h-[40px] rounded-[50%]  -my-[160px] mr-[20px] flex justify-center items-center border border-primary"
                        onClick={handleCoverImageEdit}
                    >
                        <PenIcon />
                    </div>
                    <ProviderCoverImageEdit
                        currentCoverImage={currentCoverImage}
                    />
                </div>
            ) : null}
            <div>
                <div className="w-[150px] h-[150px] bg-info -my-[114px] ml-[28px] shadow-lg flex justify-center items-center ">
                    <img
                        src={currentProfileImage}
                        alt="profileImage"
                        className="w-[150px] h-[150px] object-cover border-4 border-white"
                        onClick={handleProfileImageEdit}
                    />
                </div>
                <ProviderProfileImageEdit
                    currentProfileImage={currentProfileImage}
                />
            </div>
            <div className="w-full flex flex-col gap-2 text-success">
                <div className="w-[200px] h-[10px] ml-[200px] mt-[80px] flex justify-start gap-2">
                    <div className="flex justify-start gap-2">
                        <div>{profile?.follower}</div>
                        <div>follower</div>
                    </div>
                </div>
                {myRole != 'doctor' ? null : follow ? (
                    <div
                        className="w-[200px] h-[14px] ml-[200px] mt-[8px]"
                        id={profile?.id}
                    >
                        <button
                            className="btn-primary text-white hover:bg-success hover:text-white max-h-[24px]  rounded-2xl w-[65px]  text-lg min-h-[14px] font-normal px-[4px]  flex items-center justify-center"
                            id={profile?.id}
                            onClick={handdleFollow}
                        >
                            Follow
                        </button>
                    </div>
                ) : (
                    <div
                        className="w-[200px] h-[14px] ml-[200px] mt-[8px]"
                        id={profile?.id}
                    >
                        <button
                            className="border border-primary  text-neutral rounded-2xl px-4 py-1 hover:bg-info hover:bg-opacity-50 h-[22px] w-[65px] flex items-center justify-center text-sm"
                            id={profile?.id}
                            onClick={handdleUnFollow}
                        >
                            Unfollow
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
