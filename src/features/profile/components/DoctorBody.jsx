import DoctorBodyEdit from './DoctorBodyEdit'
import { useState } from 'react'
import { PenIcon } from '../../../icons'

export default function DoctorBody({ profile, canEdit }) {
    const handleBodyEdit = () => {
        window.DoctorBodyEdit.showModal()
    }

    return (
        <div className="flex flex-col p-[20px] mx-[16px] gap-4">
            <div className="w-full h-[30px] flex gap-4">
                <div className="font-bold text-2xl">
                    {profile?.profileName || 'Edit your Profile Name'}
                </div>
                {canEdit ? (
                    <div className=" mr-[20px]">
                        <button
                            className="w-[34px] h-[34px] font-normal rounded-full text-white  flex justify-center items-center hover:bg-base-300"
                            onClick={handleBodyEdit}
                        >
                            <PenIcon />
                        </button>

                        <DoctorBodyEdit />
                    </div>
                ) : null}
            </div>
            <div>
                <div className="w-full h-[30px] text-lg">
                    {profile?.description}
                </div>
            </div>
        </div>
    )
}
