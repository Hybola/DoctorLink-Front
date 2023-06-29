import React from 'react'
import Toggle from './Toggle'
import { useState } from 'react'

export default function SearchPartTime({ handleJobType, isParttime }) {
    const alljob = [
        {
            providerName: 'โรงพยาบาลพญาไท1',
            location: 'BTSสนามเป้า',
            jobType: 'Part-Time',
            jobTitle: 'รับหมอด่วนแผนก GP',
            startDate: '01/08/2566',
            endDate: '01/08/2566',
            wage: '6000',
        },
        {
            providerName: 'โรงพยาบาลพญาไท2',
            location: 'BTSสนามเป้า',
            jobType: 'Part-Time',
            jobTitle: 'รับหมอด่วนแผนก GP',
            startDate: '01/08/2566',
            endDate: '01/08/2566',
            wage: '8000',
        },
        {
            providerName: 'โรงพยาบาลพญาไท3',
            location: 'BTSสนามเป้า',
            jobType: 'Part-Time',
            jobTitle: 'รับหมอด่วนแผนก GP',
            startDate: '01/08/2566',
            endDate: '01/08/2566',
            wage: '10000',
        },
    ]
    const handleFilter = (e) => {
        const startDate = document.getElementById('startDate').value
        const endDate = document.getElementById('endDate').value
        const wage = document.getElementById('wage').value
        const wageSplit = wage.split('-')

        const filterWage = (wage, min, max) => {
            console.log(wage)
            console.log(max)
            console.log(wage <= max)

            return wage >= min && wage <= max
        }

        if (wageSplit[0] == 'Wage/Hour') {
            return
        }

        if (wageSplit.length > 1) {
            filterWage(alljob[0].wage, wageSplit[0], wageSplit[1])
        }
    }

    return (
        <div className="text-success flex justify-center w-fit rounded-xl shadow-md">
            {/* แถว2 เงินเดือน วันที่เริ่มงาน */}
            <div className="flex justify-start items-center gap-3 w-fit p-3">
                {/* จากวันที่ */}
                <div className="flex gap-3">
                    <div>
                        <Toggle
                            handleJobType={handleJobType}
                            isParttime={isParttime}
                        />
                    </div>
                    <div className="flex self-center font-normal">
                        Start Date
                    </div>
                    <div className="flex self-center">
                        <input
                            type="date"
                            name="startDate"
                            id="startDate"
                            className="pl-2 h-[30px] w-[140px] rounded-lg border border-primary"
                        />
                    </div>
                </div>

                {/* ถึงวันที่เท่าไร */}
                <div className="flex gap-3">
                    <div className="flex self-center">To</div>
                    <input
                        type="date"
                        name="endDate"
                        id="endDate"
                        className="pl-2 h-[30px] w-[140px] rounded-lg border border-primary"
                    />
                </div>
                {/* อัตราการจ้าง */}
                <select
                    name="wage"
                    id="wage"
                    className=" pl-2 h-[30px] w-[140px] rounded-lg border border-primary"
                >
                    <option disabled selected>
                        Wage/Hour
                    </option>
                    <option>{'<1000'}</option>
                    <option>1000-3000</option>
                    <option>3000-6000</option>
                    <option>6000-10000</option>
                    <option>{'>10000'}</option>
                </select>
                <div className="flex pl-5">
                    <button
                        onClick={handleFilter}
                        className="flex justify-center items-center bg-success hover:bg-primary text-base-100 text-center rounded-lg w-[80px] h-[30px]"
                    >
                        Filter
                    </button>
                </div>
            </div>
        </div>
    )
}
