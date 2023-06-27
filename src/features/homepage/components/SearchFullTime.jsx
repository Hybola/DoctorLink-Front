import React from 'react'
import Toggle from './Toggle'

export default function SearchFullTime({ handleJobType, isParttime }) {
    return (
        <div className="flex  items-center justify-center w-[1100px]">
            {/* แถว2 เงินเดือน วันที่เริ่มงาน */}
            <div className="flex justify-start gap-5 row-span-1 pb-5 ml-16 items-center mt-2  ">
                {/* จากวันที่ */}
                <div className="w-[800px] flex justify-start gap-5   ">
                    <div className="flex pl-20">
                        <div className="flex gap-10 items-center">
                            <div className="w-[200px]">
                                <Toggle
                                    handleJobType={handleJobType}
                                    isParttime={isParttime}
                                />
                            </div>
                            <div className="flex justify-end font-normal items-center  w-[100px]">
                                Start Work
                            </div>
                            <input
                                type="date"
                                name="startwork"
                                id="startWork"
                                className="border border-lg border-primary rounded-lg h-[30px] hover:bg-secondary shadow-lg  px-4  font-normal"
                            />
                        </div>
                    </div>

                    {/* อัตราการจ้าง */}
                    <div className="flex  items-center ">
                        <select
                            name="saraly"
                            id="saraly"
                            className="select  max-w-xs border border-primary shadow-base h-[30px] hover:bg-secondary w-[150px] min-h-[30px] max-h[40px] font-normal"
                        >
                            <option disabled selected>
                                Saraly/Month
                            </option>
                            <option>{'<40000'}</option>
                            <option>40000-100000</option>
                            <option>100000-150000</option>
                            <option>150000-200000</option>
                            <option>{'>200000'}</option>
                        </select>
                    </div>
                    <div className="flex items-center ">
                        <button
                            // onClick={handleFilter}
                            className="bg-primary w-[100px]  h-[30px] text-sm text-base-100  rounded-lg hover:bg-success ml-14   "
                        >
                            Filter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
