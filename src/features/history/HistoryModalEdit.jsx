export default function HistoryModalEdit() {
    return (
        <>
            <dialog id="EditJob" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[800px] p-12 text-base font-semibold text-success"
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-4">
                        ✕
                    </button>
                    <div className="bg-base-100 flex flex-col gap-4 px-4">
                        <div className="w-fit text-xl self-center font-bold mb-2">
                            Edit Post
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Job Title</div>
                            <div className="w-full ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    // value={input.title}
                                    // onChange={hdlchange}
                                    name="title"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Job Location</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    // value={input.location}
                                    // onChange={hdlchange}
                                    name="location"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Google Map</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    // value={input.map}
                                    // onChange={hdlchange}
                                    name="map"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Phone</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    // value={input.phone}
                                    // onChange={hdlchange}
                                    name="phone"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Line ID</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    // value={input.line}
                                    // onChange={hdlchange}
                                    name="line"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Job Type</div>
                            <select
                                name="JobType"
                                className=" h-[40px] font-normal border border-primary rounded-lg p-2 pl-3"
                                // onChange={hdlfull}
                                id="jobType"
                            >
                                <option value={'FullTime'}>Full-time</option>
                                <option value={'PartTime'}>Part-time</option>
                            </select>
                        </div>

                        {/* JOB DETAILS */}
                        <div className="flex flex-col gap-1">
                            <div>Job Descreiption</div>
                            <textarea
                                className="w-full h-[110px] font-normal p-2 pl-3 border border-primary rounded-lg "
                                // onChange={hdl}
                                // value={add.jobDes}
                                name="jobDes"
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col w-[400px] gap-1">
                                <div>Start Date Time</div>
                                <div className="w-full  ">
                                    <input
                                        type="datetime-local"
                                        className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                        // onChange={hdl}
                                        // value={add.startDateTime}
                                        name="partstart"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-[400px] gap-1">
                                <div>End Date Time</div>
                                <div className="w-full  ">
                                    <input
                                        type="datetime-local"
                                        className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                        // onChange={hdl}
                                        // value={add.endDateTime}
                                        name="partend"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Salary</div>
                            <div className="w-full ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    // onChange={hdl}
                                    // value={add.wage}
                                    name="wage"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Other</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    // onChange={hdl}
                                    // value={add.other}
                                    name="other"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-action gap-8 mr-4">
                        <button
                            className="btn w-[120px] text-base"
                            style={{ textTransform: 'none' }}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn w-[120px] bg-success text-white hover:bg-primary text-base"
                            style={{ textTransform: 'none' }}
                        >
                            Update
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    )
}
