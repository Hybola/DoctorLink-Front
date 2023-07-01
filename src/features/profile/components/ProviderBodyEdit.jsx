import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editProfile } from '../slice/profile-slice'
import InputBar from './InputBar'

export default function ProviderEdit() {
    const myRole = useSelector((state) => state.auth?.role)
    const currrentProfile = useSelector((state) => state.profile?.myProfile)

    const [profile, setProfile] = useState({ ...currrentProfile })

    const dispatch = useDispatch()

    const handleOnchange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    const handleOnclick = (e) => {
        const input = { role: myRole, payload: profile }
        dispatch(editProfile(input)).unwrap()
    }

    console.log(profile)

    return (
        <dialog id="ProviderBodyEdit" className="modal text-success">
            <form method="dialog" className="modal-box bg-base-100 px-10">
                <div className="flex justify-center mb-8">
                    <h3 className="font-bold text-lg">Edit Provider Profile</h3>
                </div>
                <InputBar
                    label="Provider Name : "
                    name="providerName"
                    value={profile?.providerName}
                    onChange={handleOnchange}
                />
                <div className="flex items-center gap-2 rounded-lg font-normal text-lg mb-4">
                    <label
                        htmlFor="description"
                        className="w-[180px] font-semibold"
                    >
                        Description :
                    </label>
                    <textarea
                        className="w-full font-normal text-lg border border-primary rounded-lg p-2 pl-3"
                        name="description"
                        value={profile?.description}
                        onChange={handleOnchange}
                    ></textarea>
                </div>
                <InputBar
                    label="Adress :"
                    name="address"
                    value={profile?.address}
                    onChange={handleOnchange}
                />

                <InputBar
                    label="Google Map : "
                    name="googleMap"
                    value={profile?.googleMap}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Telephone :"
                    name="mobile"
                    value={profile?.mobile}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="LINE ID :"
                    name="lineId"
                    value={profile?.lineId}
                    onChange={handleOnchange}
                />

                <div className="modal-action gap-2">
                    <button
                        className="btn w-[80px] text-base"
                        style={{ textTransform: 'none' }}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn w-[80px] bg-success text-white hover:bg-primary text-base"
                        style={{ textTransform: 'none' }}
                        onClick={handleOnclick}
                    >
                        Save
                    </button>
                </div>
            </form>
        </dialog>
    )
}
