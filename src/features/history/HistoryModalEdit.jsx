export default function HistoryModalEdit() {
    return (
        <>
            <dialog id="EditJob" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[800px]  p-10"
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                    <div className=" h-[500px] bg-base-100 rounded-lg shadow-lg p-4 flex flex-col gap-1">
                        <div className="w-full flex items-center text-xl font-bold mb-2">
                            Edit
                        </div>
                        <div className="flex flex-col ">
                            <div>Job Title</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full  h-[40px] p-2 border border-primary rounded-lg "
                                    // value={input.title}
                                    // onChange={hdlchange}
                                    name="title"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <div>Job Location</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full   h-[40px] p-2 border border-primary rounded-lg "
                                    // value={input.location}
                                    // onChange={hdlchange}
                                    name="location"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <div>Google Map Link</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full  h-[40px] p-2  border border-primary rounded-lg "
                                    // value={input.map}
                                    // onChange={hdlchange}
                                    name="map"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <div>Phone</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full  h-[40px] p-2  border border-primary rounded-lg "
                                    // value={input.phone}
                                    // onChange={hdlchange}
                                    name="phone"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <div>Line Id</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full  h-[40px] p-2  border border-primary rounded-lg "
                                    // value={input.line}
                                    // onChange={hdlchange}
                                    name="line"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <select
                                name="JobType"
                                className="w-full mt-4 h-[40px] border border-primary rounded-lg"
                                // onChange={hdlfull}
                                id="jobType"
                            >
                                <option value={'FullTime'}>Full Time</option>
                                <option value={'PartTime'}>Part Time</option>
                            </select>
                        </div>
                    </div>
                    {/* JOB DETAILS */}
                    <div className=" h-[500px] bg-base-100 rounded-lg shadow-lg p-4 flex flex-col gap-1 mt-2">
                        <div className="w-full flex items-center text-xl font-bold mb-2 h-[26px]"></div>
                        <div className="flex flex-col gap-4 items-center">
                            <div className="w-full flex-col">
                                <div>Job Description</div>
                                <div className="w-full  ">
                                    <textarea
                                        className="w-full  h-[110px] p-2 border border-primary rounded-lg "
                                        // onChange={hdl}
                                        // value={add.jobDes}
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
                                                // onChange={hdl}
                                                // value={add.startDateTime}
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
                                                // onChange={hdl}
                                                // value={add.endDateTime}
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
                                            // onChange={hdl}
                                            // value={add.wage}
                                            name="wage"
                                        />
                                    </div>
                                    <div>Other</div>
                                    <div className="w-full  ">
                                        <input
                                            type="text"
                                            className="w-full   h-[40px] p-2 border border-primary rounded-lg "
                                            // onChange={hdl}
                                            // value={add.other}
                                            name="other"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100%] flex justify-end mr-[120px]">
                                <button
                                    type="submit"
                                    className="btn btn-primary hover:bg-success w-[150px] text-white"
                                    // onClick={hdlsumbit}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    )
}
