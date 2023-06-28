import { useState } from 'react'
import ProviderBodyEdit from './ProviderBodyEdit'
import { MapIcon } from '../../../icons'

export default function ProviderBody({ profile, canEdit }) {
    const [editMode, setEditMode] = useState(false)
    const handleEdit = () => {
        setEditMode(true)
        window.ProviderBodyEdit.showModal()
    }

    return (
        <div className="flex flex-col p-[20px] mx-[16px]  shadow-lg border-2 rounded-lg gap-4">
            <div className="w-full h-[30px] flex justify-between">
                <div className=" min-w-[200px]  font-bold text-2xl">
                    {profile?.providerName}
                </div>
                {canEdit ? (
                    <div className=" mr-[20px]">
                        <button
                            className="btn btn-info max-h-[20px]  min-h-[14px] font-normal text-white px-2 py-0"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        {editMode ? <ProviderBodyEdit /> : null}
                    </div>
                ) : null}
            </div>
            <div className="w-full h-[30px]  text-lg">
                {profile?.description}
            </div>
            <div className="w-full   text-xl flex gap-2">
                <div>
                    <div>Location: </div>
                </div>
                <div className="flex flex-col text-base mt-1">
                    <div>{profile?.address}</div>
                    <div>{profile?.province}</div>
                    <a href={profile?.googleMap}>
                        <MapIcon />
                    </a>
                </div>
            </div>

            <div className="w-full flex flex-col">
                <div className="flex gap-1 text-xl">
                    <span>Telephone:</span>
                    <span className="text-base mt-1">{profile?.mobile}</span>
                </div>
                <div className="flex gap-1 text-xl">
                    <span>Line ID:</span>
                    <span className="text-base mt-1">{profile?.lineId}</span>
                </div>
            </div>
        </div>
    )
}
