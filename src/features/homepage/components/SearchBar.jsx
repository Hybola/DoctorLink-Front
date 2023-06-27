import React from 'react'
import { useDispatch } from 'react-redux'
import { filterJob } from '../slice/home-slice'

export default function SearchBar({ input, setInput }) {
    const dispatch = useDispatch()
    const hdlChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSearch = (e) => {
        const location = document.getElementById('location').value
        const payload = { searchText: input.searchText, location: location }
        console.log(payload)
        dispatch(filterJob(payload)).unwrap()
    }

    return (
        <div className=" ">
            {/* inputrow1#แถวการค้นหา */}
            <div className="flex pl-10 py-10 gap-7 border shadow-md  bg-[#f5fbfc] h-[120px] justify-center">
                <div className="flex justify-center items-center ">
                    <input
                        className="bg-base-100 rounded-lg text-xl placeholder:pl-2 p-2 h-[50px] w-[320px]  border border-primary shadow-lg  "
                        placeholder="Find a Job"
                        name="searchText"
                        value={input.searchText}
                        onChange={hdlChangeInput}
                    />
                </div>
                <div className="flex items-center">
                    <select
                        name="location"
                        id="location"
                        className="bg-base-100 rounded-lg text-xl text-gray-400  p-2 h-[50px] w-[200px]  border border-primary shadow-lg "
                    >
                        <option disabled selected>
                            Select location
                        </option>
                        <option className="text-black">Bangkok</option>
                        <option className="text-black">Pathumtani</option>
                        <option className="text-black">Chiangmai</option>
                        <option className="text-black">Chonburi</option>
                        <option className="text-black">Phuket</option>
                        <option className="text-black">Rayong</option>
                        <option className="text-black">Khonkaen</option>
                        <option className="text-black">Chachoengsao</option>
                        <option className="text-black">Samutsakhon</option>
                        <option className="text-black">Ayutthaya</option>
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
