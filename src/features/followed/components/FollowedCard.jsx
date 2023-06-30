import axios from '../../../api/thisAxios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unfollowed } from '../slice/followed-slice'

export default function FollowedCard({ follow }) {
    const currentFollow = useSelector(
        (state) => state.followed?.followedProvider
    )
    const dispatch = useDispatch()

    const followedProvider = useSelector((state) => state.unfollowed)
    const hdldelete = async (followId) => {
        const remainFollow = currentFollow.filter((obj) => obj.id != followId)
        const input = { followId, remainFollow }
        dispatch(unfollowed(input))
    }

    return (
        <div className="w-full flex justify-between mb-2" id={follow.id}>
            <div className="w-[500px] flex gap-2 min-h-[60px]">
                <div className="w-[60px] h-[60px] bg-slate-600">
                    <img
                        src={follow.providerImage}
                        alt="profileImage"
                        className="w-[60px] h-[60px]  bg-slate-600 object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex text-lg font-bold  ">
                        {follow.providerName}
                    </div>
                    <div className="flex  text-primary text-base font-thin">
                        {follow.providerdes}
                    </div>
                    <div className="flex   pb-2 text-primary  text-[14px] font-thin">
                        Followed: {follow.createdAt}
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    className=" border border-primary  text-neutral rounded-2xl px-4 py-1 hover:bg-info hover:bg-opacity-50"
                    onClick={() => hdldelete(follow.id)}
                >
                    Unfollow
                </button>
            </div>
        </div>
    )
}
