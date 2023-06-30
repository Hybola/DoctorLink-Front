import React from 'react'
import Jobcard from './Jobcard'
import { useSelector } from 'react-redux'

export default function PageLeft() {
    const joblist = useSelector((state) => state.home?.allJobPost)

    const job = joblist.map((j) => <Jobcard jobpost={j} />)

    return (
        <div className="h-[500px] w-[430px] flex justify-center border  rounded-xl shadow-xl pt-1 ml-5">
            <div className="h-full w-full flex flex-col gap-2 items-center overflow-y-scroll overflow-x-hidden   ">
                <div className="flex w-full  justify-between ">
                    <div className="w-[180px] flex justify-end gap-2 mt-2">
                        <div className="font-bold">1-30</div>
                        <div>of</div>
                        <div>1500</div>
                        <div>jobs</div>
                    </div>
                    <div className="flex gap-2 mr-5 items-center">
                        <div>
                            <button className="bg-primary rounded-lg w-[30px] h-[20px] text-base-100 flex justify-center items-center">
                                {' '}
                                &lt;
                            </button>
                        </div>
                        <div>
                            <button className="bg-primary rounded-lg w-[30px] h-[20px]  text-base-100 flex justify-center items-center">
                                {' '}
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3  w-full ">
                    {/* ส่วนของการ์ดงานด้านซ้าย */}
                    {job}
                </div>
            </div>
        </div>
    )
}
