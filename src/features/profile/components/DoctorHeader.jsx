import DoctorProfileImageEdit from './DoctorProfileImageEdit'
import DoctorCoverImageEdit from './CoverImageEdit'
import { PenIcon } from '../../../icons'

export default function DoctorHeader({ profile, canEdit }) {
    const defaultCoverImage =
        'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1685524621/gqjpy7avowkrwuzlnqju.jpg'
    const defaultProfileImage =
        'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687293840/Screen_Shot_2566-06-21_at_03.42.41_j0dnwe.png'

    const currentCoverImage = profile?.coverImage || defaultCoverImage
    const currentProfileImage = profile?.profileImage || defaultProfileImage

    const handleCoverImageEdit = () => window.CoverImageEdit.showModal()
    const handleProfileImageEdit = () => {
        if (canEdit) window.DoctorProfileImageEdit.showModal()
    }

    return (
        <>
            <div className=" h-[220px] mb-[40px]">
                <div className="w-full h-[200px] bg-base-300 rounded-t-lg  ">
                    <img
                        src={currentCoverImage}
                        alt="coverImage"
                        className="w-full h-[200px] rounded-t-lg object-cover"
                    />
                </div>
                {canEdit ? (
                    <div className="w-full flex  flex-col  items-end z-10">
                        <div
                            className="bg-base-100 w-[40px] h-[40px] rounded-[50%] -my-[160px] mr-[20px] flex justify-center  items-center hover:bg-base-300 hover:cursor-pointer border border-primary"
                            onClick={handleCoverImageEdit}
                        >
                            <PenIcon />
                        </div>
                        <DoctorCoverImageEdit
                            currentCoverImage={currentCoverImage}
                        />
                    </div>
                ) : null}

                <div>
                    <div className="w-[150px] h-[150px]  -my-[100px] ml-[28px] shadow-lg flex justify-center items-center rounded-[50%] ">
                        <img
                            src={currentProfileImage}
                            alt="profileImage"
                            className="w-[150px] h-[150px] object-cover  rounded-[50%]  border-4 border-white"
                            onClick={handleProfileImageEdit}
                        />
                    </div>
                    <DoctorProfileImageEdit
                        currentProfileImage={currentProfileImage}
                    />
                </div>
            </div>
        </>
    )
}
