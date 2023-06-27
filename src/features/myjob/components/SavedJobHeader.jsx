export default function SavedJobHeader() {
    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100  rounded-t-lg  shadow-sm h-fit p-[20px]">
            <div className="w-full flex flex-col">
                <div className="w-full felx font-bold text-xl mb-2">
                    Saved Job
                </div>
                <div className="w-full flex justify-between  ">
                    <div className=" flex flex-col items-start gap-2">
                        <div className="w-full flex justify-between gap-4">
                            <div className="w-[70px]">Job Type:</div>
                            <div className="flex gap-2">
                                <div className="flex gap-1 items-center">
                                    <input
                                        type="checkbox"
                                        name="jobtype"
                                        id="parttime"
                                        value="parttime"
                                        className="w-[18px] h-[18px] "
                                    />
                                    <label htmlFor="parttime" className="">
                                        Part-time
                                    </label>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <input
                                        type="checkbox"
                                        name="jobtype"
                                        id="fulltime"
                                        value="fulltime"
                                        className="w-[18px] h-[18px]"
                                    />
                                    <label htmlFor="parttime" className="">
                                        Full-time
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <label htmlFor="sortBy" className="w-[70px]">
                                Sort By:
                            </label>
                            <select name="sortBy" id="sortBy">
                                <option value="Recently Followed">
                                    Recently Saved
                                </option>
                                <option value="Job Post Amount">
                                    Working date
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-end">
                        <input
                            type="search"
                            className="border w-[300px] border-primary py-1 px-4  rounded-lg"
                            placeholder="Search by Health Provider Name"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
