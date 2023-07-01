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
        <dialog id="ProviderBodyEdit" className="modal ">
            <form method="dialog" className="modal-box bg-base-100 w-[600px]">
                <div className="flex justify-center mb-2">
                    <h3 className="font-bold text-lg">Edit Provider Profile</h3>
                </div>
                <InputBar
                    label="Provider Name: "
                    name="providerName"
                    value={profile?.providerName}
                    onChange={handleOnchange}
                />
                <div className="flex gap-2 ">
                    <label
                        htmlFor="description"
                        className="w-[180px] font-normal text-sm"
                    >
                        Description
                    </label>
                    <textarea
                        className=" w-full min-h-[20px] p-2 font-normal text-sm border border-bg-primary rounded-lg"
                        name="description"
                        value={profile?.description}
                        onChange={handleOnchange}
                    ></textarea>
                </div>
                <InputBar
                    label="Adress:"
                    name="address"
                    value={profile?.address}
                    onChange={handleOnchange}
                />

                <InputBar
                    label="Google Map Link: "
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
                    <button className="btn w-[80px] ">CANCEL</button>
                    <button
                        className="btn bg-primary  w-[100px] font-bold text-white hover:bg-success"
                        onClick={handleOnclick}
                    >
                        SAVE
                    </button>
                </div>
            </form>
        </dialog>
    )
}
