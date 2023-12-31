import axios from '../../../api/thisAxios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unfollowed } from '../slice/followed-slice'
import { useNavigate } from 'react-router-dom'
import { dateTimeTH } from '../../../utils/dateTime'

export default function FollowedCard({ follow }) {
    const currentFollow = useSelector(
        (state) => state.followed?.followedProvider
    )
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const followedProvider = useSelector((state) => state.unfollowed)
    const hdldelete = async (followId) => {
        const remainFollow = currentFollow.filter((obj) => obj.id != followId)
        const input = { followId, remainFollow }
        dispatch(unfollowed(input))
    }

    return (
        <div className="w-full flex justify-between mb-2" id={follow?.id}>
            <div className="w-[500px] flex gap-2 min-h-[60px]">
                <div
                    id={follow?.providerId + '/post/0'}
                    className="w-[60px] h-[60px] bg-slate-600"
                    onClick={(e) => navigate(`/doctor/provider/${e.target.id}`)}
                >
                    <img
                        id={follow?.providerId + '/post/0'}
                        src={follow?.providerImage}
                        alt="profileImage"
                        className="w-[60px] h-[60px]  bg-slate-600 object-cover cursor-pointer"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex text-lg font-bold  ">
                        {follow?.providerName}
                    </div>
                    <div className="flex  text-primary text-base font-thin">
                        {follow?.providerdes}
                    </div>
                    <div className="flex   pb-2 text-primary  text-[14px] font-thin">
                        Followed: {dateTimeTH(follow?.createdAt)}
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    className=" border border-primary  text-neutral rounded-2xl px-4 py-1 hover:bg-info hover:bg-opacity-50"
                    onClick={() => hdldelete(follow?.id)}
                >
                    Unfollow
                </button>
            </div>
        </div>
    )
}
