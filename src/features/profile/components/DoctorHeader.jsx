import DoctorProfileImageEdit from './DoctorProfileImageEdit'
import DoctorCoverImageEdit from './CoverImageEdit'

export default function DoctorHeader({ profile, user }) {
    const defaultCoverImage =
        'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1685524621/gqjpy7avowkrwuzlnqju.jpg'
    const defaultProfileImage =
        profile.gender == 1
            ? 'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687293840/Screen_Shot_2566-06-21_at_03.42.41_j0dnwe.png'
            : 'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687294250/Screen_Shot_2566-06-21_at_03.48.53_w0xygg.png'

    const currentCoverImage = profile?.coverImagePath || defaultCoverImage
    const currentProfileImage = profile?.profileImagePath || defaultProfileImage
    const handleCoverImageEdit = () => window.CoverImageEdit.showModal()
    const handleProfileImageEdit = () =>
        window.DoctorProfileImageEdit.showModal()

    return (
        <div className=" h-[220px] mb-[40px]">
            <div className="w-full h-[200px] bg-base-300 rounded-t-lg">
                <img
                    src={currentCoverImage}
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
                    </div>
                    <DoctorCoverImageEdit currentImage={currentCoverImage} />
                </div>
            ) : null}
            <div>
                <div className="w-[150px] h-[150px] bg-info -my-[100px] ml-[28px] shadow-lg flex justify-center items-center  rounded-[50%]">
                    <img
                        src={currentProfileImage}
                        alt="profileImage"
                        className="w-[150px] h-[150px] object-cover rounded-[50%]"
                        onClick={handleProfileImageEdit}
                    />
                </div>
                <DoctorProfileImageEdit currentImage={currentProfileImage} />
            </div>
        </div>
    )
}