import DoctorDataEdit from './DoctorDataEdit'
import { useState } from 'react'
import { PenIcon, EditIcon } from '../../../icons'

export default function DoctorDataBody({ profile, canEdit }) {
    const [editMode, setEditMode] = useState(false)

    const handleBodyEdit = () => {
        setEditMode(true)
        window.DoctorDataEdit.showModal()
    }

    return (
        <div className="flex flex-col p-[20px] mx-[16px] gap-4">
            <div className="w-full h-[30px] flex justify-between">
                <div className=" min-w-[200px]  font-bold text-2xl">
                    Personal Information
                </div>
                {canEdit ? (
                    <div className=" flex justify-end items-center">
                        <button
                            className="  max-h-[20px]  min-h-[14px] font-normal text-white px-2 py-0"
                            onClick={handleBodyEdit}
                        >
                            <EditIcon />
                        </button>

                        {editMode ? <DoctorDataEdit /> : null}
                    </div>
                ) : null}
            </div>
            <div>
                <div className="w-full flex flex-col gap-2">
                    <div className="flex gap-1 text-lg">
                        <span>First Name:</span>
                        <span className="text-base mt-1">
                            {profile?.firstName}
                        </span>
                    </div>
                    <div className="flex gap-1 text-lg">
                        <span>Last Name:</span>
                        <span className="text-base mt-1">
                            {profile?.lastName}
                        </span>
                    </div>
                    <div className="flex gap-1 text-lg">
                        <span>Gender:</span>
                        <span className="text-base mt-1">
                            {profile?.gender}
                        </span>
                    </div>
                    <div className="flex gap-1 text-lg">
                        <span>Birthdate:</span>
                        <span className="text-base mt-1">
                            {profile?.birthdate}
                        </span>
                    </div>
                    <div className="flex gap-1 text-lg">
                        <span>Telephone:</span>
                        <span className="text-base mt-1">
                            {profile?.mobile}
                        </span>
                    </div>
                    <div className="flex gap-1 text-lg">
                        <span>Lind ID:</span>
                        <span className="text-base mt-1">
                            {profile?.lineId}
                        </span>
                    </div>
                    <div className="flex gap-1 text-lg">
                        <span>Education:</span>
                        <span className="text-base mt-1">
                            {profile?.education}
                        </span>
                    </div>
                    <div className="flex gap-1 text-lg">
                        <span>Work Experience:</span>
                        <span className="text-base mt-1">
                            {profile?.workexperience}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}