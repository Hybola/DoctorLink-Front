import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editProfile } from '../slice/profile-slice'
import InputBar from './InputBar'
import AutoCompleteInput from '../../../components/autoCompleteInput'

export default function ProviderEdit() {
    const myRole = useSelector((state) => state.auth?.role)
    const currrentProfile = useSelector((state) => state.profile?.myProfile)
    const province = useSelector((state) => state.profile?.province)

    const [profile, setProfile] = useState({ ...currrentProfile })

    const dispatch = useDispatch()

    const handleOnchange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }
    const handleOnclick = (e) => {
        const provinceObj = province.find((obj) => obj.id == profile.provinceId)

        const payload = {
            ...profile,
            provinceId: provinceObj?.id || '0',
            Province: { name: provinceObj?.name },
        }

        const input = { role: myRole, payload: payload }
        dispatch(editProfile(input)).unwrap()
    }

    return (
        <dialog id="ProviderBodyEdit" className="modal text-success ">
            <form
                method="dialog"
                className="modal-box bg-base-100 px-10 min-w-[800px] w-[800px] "
            >
                <div className="flex justify-center mb-8">
                    <h3 className="font-bold text-lg">Edit Provider Profile</h3>
                </div>
                <InputBar
                    label="Provider Name"
                    name="providerName"
                    value={profile?.providerName}
                    onChange={handleOnchange}
                />
                <div className="flex flex-col gap-1 rounded-lg font-normal text-lg mb-3">
                    <label
                        htmlFor="description"
                        className="w-fit font-semibold"
                    >
                        Description
                    </label>
                    <textarea
                        className="w-full font-normal text-lg border border-primary rounded-lg p-2 pl-3"
                        name="description"
                        value={profile?.description}
                        onChange={handleOnchange}
                    ></textarea>
                </div>
                <InputBar
                    label="Address"
                    name="address"
                    value={profile?.address}
                    onChange={handleOnchange}
                />
                <div className="flex items-center gap-2 rounded-lg font-normal text-lg mb-4">
                    <label
                        htmlFor="province"
                        className="w-[142px] font-semibold"
                    >
                        Province
                    </label>
                    {/* <select
                        name="provinceId"
                        id="provinceId"
                        onChange={handdleChangeInput}
                        value={input.provinceId}
                        className="text-md pl-2 h-[50px] w-[160px] rounded-lg border border-primary"
                    >
                        <option
                            className="text-gray-400"
                            value=""
                            disabled
                            selected
                        >
                            Select location
                        </option>
                        <option value="1">Bangkok</option>
                        <option value="2">Pathumtani</option>
                        <option value="3">Chiangmai</option>
                        <option value="4">Chonburi</option>
                        <option value="5">Phuket</option>
                        <option value="6">Rayong</option>
                        <option value="7">Khonkaen</option>
                        <option value="8">Chachoengsao</option>
                        <option value="9">Samutsakhon</option>
                        <option value="10">Ayutthaya</option>
                        <option value="11">Nonthaburi</option>
                    </select> */}

                    <AutoCompleteInput
                        name="provinceId"
                        state={profile}
                        setState={setProfile}
                        items={province}
                    />
                </div>

                <InputBar
                    label="Google Map"
                    name="googleMap"
                    value={profile?.googleMap}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Phone"
                    name="mobile"
                    value={profile?.mobile}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Line ID"
                    name="lineId"
                    value={profile?.lineId}
                    onChange={handleOnchange}
                />

                <div className="modal-action gap-8">
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
