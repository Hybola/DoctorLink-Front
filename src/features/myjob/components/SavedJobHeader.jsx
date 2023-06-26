export default function SavedJobHeader() {
    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100  rounded-t-lg  shadow-sm h-fit p-[20px]">
            <div className="w-full flex flex-col">
                <div className="w-full felx font-bold text-xl">
                    My Saved Job
                </div>
                <div className="w-full flex justify-between  mb-4 ">
                    <div className=" flex  items-end gap-2">
                        <label htmlFor="sortBy" className="">
                            Sort By:
                        </label>
                        <select
                            name="sortBy"
                            id="sortBy"
                            className=" font-bold"
                        >
                            <option value="Recently Followed">
                                Recently Saved
                            </option>
                            <option value="Job Post Amount">Job Title</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="search"
                            className="border w-[300px] border-primary py-1 px-4  rounded-lg"
                            placeholder="Search by Job Title"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}