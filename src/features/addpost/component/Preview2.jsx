import React from 'react'
import { useSelector } from 'react-redux'
import Work from '../Work'

export default function Preview2({ post, p }) {
    const user = useSelector((state) => state.auth?.user)
    return (
        <>
            <div className="w-[700px]">
                <div className=" h-[220px] mb-[60px]">
                    <div className="w-full h-[200px] bg-base-300 rounded-t-lg">
                        <img
                            src={user.coverImage}
                            alt="coverImage"
                            className="w-full h-[200px] rounded-t-lg object-cover"
                        />
                    </div>
                    <div>
                        <div className="w-[150px] h-[150px] bg-info -my-[114px] ml-[28px] shadow-lg flex justify-center items-center ">
                            <img
                                src={user?.profileImage}
                                alt="profileImage"
                                className="w-[150px] h-[150px] object-cover border-4 border-white cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 text-success">
                        <div className="w-[200px] h-[10px] ml-[200px] mt-[80px] flex justify-start gap-2"></div>
                    </div>

                    <div className=" text-2xl font-bold mt-8 ml-4 cursor-pointer">
                        {user?.name}
                    </div>
                </div>

                <hr />
                <Work post={post} p={p} />
            </div>
        </>
    )
}
