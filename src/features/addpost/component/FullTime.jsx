import { useState } from 'react'

export default function FullTime({ a, hdl }) {
    return (
        <>
            <div className="w-[1000px] max-w-[1000px] min-w-[800px] h-[500px] bg-base-100 rounded-lg shadow-lg p-4 flex flex-col gap-1">
                <div className="w-full flex items-center text-xl font-bold mb-2 h-[26px]"></div>
                <div className="flex flex-col gap-4 items-center">
                    <div className="w-full flex-col">
                        <div>Job Description</div>
                        <div className="w-full  ">
                            <textarea
                                className="w-full  h-[110px] p-2 border border-primary rounded-lg "
                                onChange={hdl}
                                value={a.jobDes}
                                name="jobDes"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <div>Working day</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full   h-[40px] p-2 border border-primary rounded-lg "
                                    onChange={hdl}
                                    value={a.workingDay}
                                    name="workingDay"
                                />
                            </div>
                        </div>
                        <div className="flex  justify-between mt-2">
                            <div className="flex flex-col w-[400px]">
                                <div>Start Date</div>
                                <div className="w-full  ">
                                    <input
                                        type="date"
                                        className="w-full   h-[40px] p-2 border border-primary rounded-lg "
                                        onChange={hdl}
                                        value={a.startDate}
                                        name="startDate"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-[400px]">
                                <div>Salary</div>
                                <div className="w-full  ">
                                    <input
                                        type="text"
                                        className="w-full  h-[40px] p-2 border border-primary rounded-lg "
                                        onChange={hdl}
                                        value={a.salary}
                                        name="salary"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex  justify-between mt-2">
                            <div className="flex flex-col w-[400px]">
                                <div>Annual holiday</div>
                                <div className="w-full  ">
                                    <input
                                        type="text"
                                        className="w-full   h-[40px] p-2 border border-primary rounded-lg "
                                        onChange={hdl}
                                        value={a.annual}
                                        name="annual"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-[400px]">
                                <div>Benefit</div>
                                <div className="w-full  ">
                                    <input
                                        type="text"
                                        className="w-full   h-[40px] p-2 border border-primary rounded-lg "
                                        onChange={hdl}
                                        value={a.benefit}
                                        name="benefit"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <div>Other</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full   h-[40px] p-2 border border-primary rounded-lg "
                                    onChange={hdl}
                                    value={a.other}
                                    name="other"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
