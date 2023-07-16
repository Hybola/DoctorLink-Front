import { useDispatch, useSelector } from 'react-redux'
import { setfilter } from '../slice/followed-slice'
import { useEffect, useState } from 'react'

export default function FollowedHeader() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const followedProvider = useSelector(
        (state) => state?.followed?.followedProvider
    )
    const hdlchange = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        if (search.trim() == '') {
            dispatch(setfilter(followedProvider))
            return
        }
        const rs = followedProvider.filter((el) =>
            el.providerName
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
        )
        dispatch(setfilter(rs))
    }, [search])
    return (
        <div className=" flex flex-col max-w-[900px] min-w-[600px] w-[700px]  bg-base-100  rounded-t-xl  shadow-lg h-fit p-[20px]">
            <div className="w-full flex flex-col">
                <div className="w-full felx font-bold text-xl">
                    <span>{followedProvider?.length}</span> followed
                </div>
                <div className="w-full flex justify-between  mb-4 ">
                    <div className=" flex justify-center items-center gap-2">
                        <label htmlFor="sortBy"></label>
                        {/* <select
                            name="sortBy"
                            id="sortBy"
                            className=" font-bold"
                        >
                            <option value="Recently Followed">
                                Recently Followed
                            </option>
                            <option value="Job Post Amount"></option>
                        </select> */}
                    </div>
                    <div>
                        <input
                            type="search"
                            className="border w-[300px] border-primary py-1 px-4  rounded-lg"
                            placeholder="Search by name"
                            name="search"
                            onChange={hdlchange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
