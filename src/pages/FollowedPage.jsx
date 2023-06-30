import { useEffect } from 'react'
import Followed from '../features/followed/components/Followed'
import { useDispatch, useSelector } from 'react-redux'
import { getfollowed } from '../features/followed/slice/followed-slice'

export default function FollowedPage() {
    const dispatch = useDispatch()
    const followedProvider = useSelector(
        (state) => state.followed.followedProvider
    )
    console.log(followedProvider)

    useEffect(() => {
        dispatch(getfollowed(1)).unwrap()
    }, [])
    return (
        <div className=" h-screen w-full  bg-base-100 flex justify-center">
            <Followed followedProvider={followedProvider} />
        </div>
    )
}
