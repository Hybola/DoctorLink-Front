import React from 'react'
import { useState } from 'react'

export default function PartTime({ add, hdl }) {
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
                                value={add.jobDes}
                                name="jobDes"
                            />
                        </div>

                        <div className="flex  justify-between mt-2">
                            <div className="flex flex-col w-[400px]">
                                <div>Start Date Time</div>
                                <div className="w-full  ">
                                    <input
                                        type="datetime-local"
                                        className="w-full   h-[40px] p-2 border border-primary rounded-lg "
                                        onChange={hdl}
                                        value={add.startDateTime}
                                        name="partstart"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-[400px]">
                                <div>End Date Time</div>
                                <div className="w-full  ">
                                    <input
                                        type="datetime-local"
                                        className="w-full  h-[40px] p-2 border border-primary rounded-lg "
                                        onChange={hdl}
                                        value={add.endDateTime}
                                        name="partend"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col ">
                            <div>Wage</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full   h-[40px] p-2 border border-primary rounded-lg "
                                    onChange={hdl}
                                    value={add.wage}
                                    name="wage"
                                />
                            </div>
                            <div>Other</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full   h-[40px] p-2 border border-primary rounded-lg "
                                    onChange={hdl}
                                    value={add.other}
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
