import { useDispatch } from 'react-redux'
import { filterJob } from '../slice/home-slice'
import { FilterIcon, SearchIcon } from '../../../icons'

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
        <div className="flex w-full justify-center text-success">
            {/* inputrow1#แถวการค้นหา */}
            <div className=" flex justify-center items-center w-fit gap-3 shadow-lg p-5 rounded-xl">
                <div className="flex justify-center items-center">
                    <input
                        className="text-md pl-4 h-[40px] w-[250px] rounded-lg border border-primary"
                        placeholder="Keyword"
                        name="searchText"
                        value={input.searchText}
                        onChange={hdlChangeInput}
                    />
                </div>
                <div>
                    <select
                        name="location"
                        id="location"
                        className="text-md pl-2 h-[40px] w-[150px] rounded-lg border border-primary"
                    >
                        <option className="text-gray-400" disabled selected>
                            Select location
                        </option>
                        <option>Ayutthaya</option>
                        <option>Bangkok</option>
                        <option>Chachoengsao</option>
                        <option>Chiangmai</option>
                        <option>Chonburi</option>
                        <option>Khonkaen</option>
                        <option>Pathumtani</option>
                        <option>Phuket</option>
                        <option>Rayong</option>
                        <option>Samutsakhon</option>
                    </select>
                </div>

                <div>
                    <select
                        name="fullOrPart"
                        id="fullOrPart"
                        className="text-md pl-2 h-[40px] w-[100px] rounded-lg border border-primary"
                    >
                        <option>Part-time</option>
                        <option>Full-time</option>
                    </select>
                </div>

                {/* จบก้อน searchBar*/}
                <div className="flex justify-end w-[150px] items-center ">
                    <button
                        onClick={handleSearch}
                        className="flex transition ease-out duration-500 justify-center items-center gap-1 bg-success hover:bg-primary text-base-100 text-md py-1 px-4 rounded-lg w-[120px] h-[40px]"
                    >
                        <SearchIcon /> Search
                    </button>
                </div>
            </div>
        </div>
    )
}
