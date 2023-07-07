import ProviderBodyEdit from './ProviderBodyEdit'
import { MapIcon } from '../../../icons'
import { useSelector } from 'react-redux'

export default function ProviderBody({ profile, canEdit }) {
    const handleEdit = () => {
        window.ProviderBodyEdit.showModal()
    }

    return (
        <div className="flex flex-col p-[20px] mx-[16px]  shadow-lg border-2 rounded-lg gap-4 text-success">
            <div className="w-full h-[30px] flex justify-between">
                <div className=" min-w-[200px]  font-bold text-2xl">
                    {profile?.providerName}
                </div>
                {canEdit ? (
                    <div className=" mr-[20px]">
                        <button
                            className="bg-success hover:bg-primary rounded-lg text-white px-4 py-1"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <ProviderBodyEdit />
                    </div>
                ) : null}
            </div>
            <div className="w-full h-[30px] text-xl">
                {profile?.description}
            </div>
            <div className="w-full text-lg flex gap-2 items-center">
                <div>
                    <div className="font-semibold">Location : </div>
                </div>
                <div className="flex gap-2 items-center">
                    <a href={profile?.googleMap}>
                        <MapIcon />
                    </a>
                    <div>{profile?.address}</div>
                    <div>{profile?.Province?.name}</div>
                </div>
            </div>

            <div className="w-full text-lg flex gap-2 items-center">
                <div>
                    <div className="font-semibold">Telephone : </div>
                </div>
                <div className="text-base">{profile?.mobile}</div>
            </div>
            <div className="w-full text-lg flex gap-2 items-center">
                <div>
                    <div className="font-semibold">Line ID :</div>
                </div>
                <div className="text-base">{profile?.lineId}</div>
            </div>
        </div>
    )
}
