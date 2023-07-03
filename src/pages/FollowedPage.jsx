import { useEffect, useState } from 'react'
import Followed from '../features/followed/components/Followed'
import { useDispatch, useSelector } from 'react-redux'
import { getfollowed } from '../features/followed/slice/followed-slice'

export default function FollowedPage() {
    const input = useSelector((state) => state.followed?.message)
    const followedProvider = useSelector(
        (state) => state.followed.followedProvider
    )
    const userid = useSelector((state) => state.auth?.user.id)
    const dispatch = useDispatch()
    const [search, setSearch] = useState(input)
    // console.log(followedProvider)
    // console.log(input)

    useEffect(() => {
        const rs = dispatch(getfollowed(userid)).unwrap()
        console.log(search)
        return rs
    }, [])
    return (
        <div className=" h-screen w-full flex justify-center bg-[#F5FBFC]" >
            <Followed followedProvider={followedProvider} />
        </div>
    )
}
