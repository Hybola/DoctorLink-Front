export default function FollowedHeader({ followedProvider }) {
    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100  rounded-t-lg  shadow-sm h-fit p-[20px]">
            <div className="w-full flex flex-col">
                <div className="w-full felx font-bold text-xl">
                    <span>{followedProvider.length}</span> followed
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
                                Recently Followed
                            </option>
                            <option value="Job Post Amount">
                                Lastest Job-Post
                            </option>
                            <option value="Job Post Amount">
                                Amount Job-Post
                            </option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="search"
                            className="border w-[300px] border-primary py-1 px-4  rounded-lg"
                            placeholder="Search by name"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
