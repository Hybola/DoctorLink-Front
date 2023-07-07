import DoctorDataEdit from './DoctorDataEdit'
import { EditIcon } from '../../../icons'
import { dateReverse } from '../../../utils/dateTime'
import { useSelector } from 'react-redux'

export default function DoctorDataBody({ profile, canEdit }) {
    const currrentProfile = useSelector((state) => state.profile?.myProfile)
    const handleBodyEdit = () => {
        window.DoctorDataEdit.showModal()
    }

    return (
        <div className="flex flex-col p-[13px] mx-[16px] gap-3">
            <div className="w-full h-[30px] flex justify-between">
                <div className=" min-w-[200px] font-bold text-2xl">
                    Personal Information
                </div>
                {canEdit ? (
                    <div className=" flex justify-end items-center">
                        <button
                            className="max-h-[20px]  min-h-[14px] font-normal text-white px-2 py-0"
                            onClick={handleBodyEdit}
                        >
                            <EditIcon />
                        </button>
                        {currrentProfile?.firstName == undefined ? null : (
                            <DoctorDataEdit />
                        )}
                    </div>
                ) : null}
            </div>
            <div>
                <div className="w-full flex flex-col gap-3">
                    <div className="flex gap-3 text-lg">
                        <span className="font-semibold">First Name :</span>
                        <span className="text-primary">
                            {profile?.firstName}
                        </span>
                    </div>
                    <div className="flex gap-3 text-lg">
                        <span className="font-semibold">Last Name :</span>
                        <span className="text-primary">
                            {profile?.lastName}
                        </span>
                    </div>
                    <div className="flex gap-3 text-lg">
                        <span className="font-semibold">Gender :</span>
                        <span className="text-primary">
                            {profile?.gender == 1
                                ? 'Male'
                                : profile?.gender == 2
                                ? 'Female'
                                : profile?.gender == 3
                                ? 'Other'
                                : ''}
                        </span>
                    </div>
                    <div className="flex gap-3 text-lg">
                        <span className="font-semibold">Birthdate :</span>
                        <span className="text-primary">
                            {dateReverse(profile?.birthDate)}
                        </span>
                    </div>
                    <div className="flex gap-3 text-lg">
                        <span className="font-semibold">Telephone :</span>
                        <span className="text-primary">{profile?.mobile}</span>
                    </div>
                    <div className="flex gap-3 text-lg">
                        <span className="font-semibold">Lind ID :</span>
                        <span className="text-primary">{profile?.lineId}</span>
                    </div>
                    <div className="flex gap-3 text-lg">
                        <span className="font-semibold">Education :</span>
                        <span className="text-primary">
                            {profile?.education}
                        </span>
                    </div>
                    <div className="flex gap-3 text-lg">
                        <span className="font-semibold">Work Experience :</span>
                        <span className="text-primary">
                            {profile?.workExperience}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
