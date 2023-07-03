import React from 'react'
import Toggle from './Toggle'

export default function SearchFullTime({ handleJobType, isParttime }) {
    return (
        <div className="text-success flex justify-center w-fit rounded-xl shadow-md">
            {/* แถว2 เงินเดือน วันที่เริ่มงาน */}
            <div className="flex justify-start items-center gap-3 w-fit p-3">
                {/* จากวันที่ */}
                <div className="flex gap-3">
                    <div>
                        <div className="flex gap-3">
                            <Toggle
                                handleJobType={handleJobType}
                                isParttime={isParttime}
                            />
                            <div className="flex self-center font-normal">
                                Start Work
                            </div>
                            <div className="flex self-center">
                                <input
                                    type="date"
                                    name="startwork"
                                    id="startWork"
                                    className="pl-2 h-[30px] w-[140px] rounded-lg border border-primary"
                                />
                            </div>
                        </div>
                    </div>

                    {/* อัตราการจ้าง */}
                    <div className="flex self-center">
                        <select
                            name="saraly"
                            id="saraly"
                            className="pl-2 h-[30px] w-[160px] rounded-lg border border-primary"
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
                    <div className="flex items-center pl-5">
                        <button
                            // onClick={handleFilter}
                            className="flex justify-center items-center bg-success hover:bg-primary text-base-100 text-center rounded-lg w-[80px] h-[30px]"
                        >
                            Filter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
