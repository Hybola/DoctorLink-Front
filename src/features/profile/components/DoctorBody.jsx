import DoctorBodyEdit from './DoctorBodyEdit'

export default function DoctorBody({ profile, canEdit }) {
    const handleBodyEdit = () => {
        window.DoctorBodyEdit.showModal()
    }

    return (
        <div className="flex flex-col p-[20px] mx-[16px] shadow-lg border-2  rounded-lg gap-4">
            <div className="w-full h-[30px] flex justify-between">
                <div className=" min-w-[200px]  font-bold text-2xl">
                    {profile?.profileName}
                </div>
                {canEdit ? (
                    <div className=" mr-[20px]">
                        <button
                            className="btn btn-info max-h-[20px]  min-h-[14px] font-normal text-white px-2 py-0"
                            onClick={handleBodyEdit}
                        >
                            Edit
                        </button>
                        <DoctorBodyEdit />
                    </div>
                ) : null}
            </div>
            <div className="w-full h-[30px]  text-lg">
                {profile?.description}
            </div>
            <div className="w-full flex flex-col">
                <div className="flex gap-1 text-xl">
                    <span>Phone:</span>
                    <span className="text-base mt-1">{profile?.mobile}</span>
                </div>
                <div className="flex gap-1 text-xl">
                    <span>Lind-Id:</span>
                    <span className="text-base mt-1">{profile?.lineId}</span>
                </div>
            </div>
        </div>
    )
}
