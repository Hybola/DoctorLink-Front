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
        <div className="">
            {/* แถว2 เงินเดือน วันที่เริ่มงาน */}
            <div className="flex justify-start gap-5 row-span-1 pb-5 ml-16 items-center mt-2">
                {/* จากวันที่ */}
                <div className="flex gap-5 ">
                    <div className="ml-10">
                        <Toggle
                            handleJobType={handleJobType}
                            isParttime={isParttime}
                        />
                    </div>
                    <div className="flex items-center font-normal">
                        Start Date
                    </div>
                    <div className="flex items-center">
                        <input
                            type="date"
                            name="startDate"
                            id="startDate"
                            className="border border-lg border-primary rounded-lg h-[30px] hover:bg-secondary shadow-lg  px-4 font-normal"
                        />
                    </div>
                </div>

                {/* ถึงวันที่เท่าไร */}
                <div className="flex  gap-5">
                    <div className="flex items-center text-base">To</div>
                    <input
                        type="date"
                        name="endDate"
                        id="endDate"
                        className="border border-lg border-primary rounded-lg h-[30px] hover:bg-secondary shadow-lg  px-4 font-normal"
                    />
                </div>
                {/* อัตราการจ้าง */}
                <select
                    name="wage"
                    id="wage"
                    className="select  max-w-xs border border-primary shadow-lg h-[30px] hover:bg-secondary w-[150px] min-h-[30px] max-h[30px] font-normal"
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
                <div className="flex items-center  ml-16   ">
                    <button
                        onClick={handleFilter}
                        className="bg-primary w-[100px]  h-[30px] text-sm text-base-100  rounded-lg p-2 hover:bg-success "
                    >
                        Filter
                    </button>
                </div>
            </div>
        </div>
    )
}
