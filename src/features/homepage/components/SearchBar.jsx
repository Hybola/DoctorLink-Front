import React from 'react'

export default function SearchBar({ input, setInput }) {
    const hdlChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSearch = (e) => {
        console.log(input)
    }

    const handleSubmitFormSearch = async (e) => {}
    return (
        <div className=" ">
            {/* inputrow1#แถวการค้นหา */}
            <div className="flex pl-10 py-10 gap-7 border shadow-md  bg-[#f5fbfc] h-[120px] justify-center">
                <div className="flex justify-center items-center ">
                    <input
                        className="bg-base-100 rounded-lg text-xl p-2 h-[50px] w-[320px]  placeholder:text-center border border-primary shadow-lg  "
                        placeholder="Find a Job"
                        name="searchText"
                        value={input.searchText}
                        onChange={hdlChangeInput}
                    />
                </div>
                <div className="flex items-center">
                    <select className="bg-base-100 rounded-lg text-xl text-gray-400 p-2 h-[50px] w-[200px]  placeholder:text-center border border-primary shadow-lg ">
                        <option disabled selected>
                            Select location
                        </option>
                        <option>กรุงเทพ</option>
                        <option>ปทุมธานี</option>
                        <option>สุราษฎร์ธานี</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>

                {/* จบก้อน searchBar*/}
                <div className="flex justify-end w-[300px] items-center ">
                    <button
                        onClick={handleSearch}
                        class="bg-primary hover:bg-success text-base-100 text-xl py-2 px-4  border-neutral rounded-lg shadow-lg w-[150px] items-center"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
