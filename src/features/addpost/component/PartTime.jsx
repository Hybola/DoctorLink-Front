import React from 'react'
import { useState } from 'react'

export default function PartTime({ add, hdl }) {
    return (
        <>
            <div className="w-[1000px] max-w-[1000px] min-w-[800px] bg-base-100 rounded-lg shadow-lg p-8 flex flex-col">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <div>Job Description</div>
                        <div className="w-full">
                            <textarea
                                className="w-full h-[100px] p-2 pl-3 border border-primary rounded-lg font-normal"
                                onChange={hdl}
                                value={add.jobDes}
                                name="jobDes"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between gap-8">
                        <div className="flex flex-col w-[400px]">
                            <div>Start Date Time</div>
                            <div className="w-full  ">
                                <input
                                    type="datetime-local"
                                    className="w-full h-[40px] p-2 border border-primary rounded-lg font-normal"
                                    onChange={hdl}
                                    value={add.startDate}
                                    name="startDate"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-[400px]">
                            <div>End Date Time</div>
                            <div className="w-full  ">
                                <input
                                    type="datetime-local"
                                    className="w-full h-[40px] p-2 border border-primary rounded-lg font-normal"
                                    onChange={hdl}
                                    value={add.endDate}
                                    name="endDate"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div>Salary</div>
                        <div className="w-full  ">
                            <input
                                type="text"
                                className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                onChange={hdl}
                                value={add.wage}
                                name="wage"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div>Other</div>
                        <div className="w-full  ">
                            <input
                                type="text"
                                className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                onChange={hdl}
                                value={add.other}
                                name="other"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
