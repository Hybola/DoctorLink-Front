import { useDispatch } from 'react-redux'
import { searchJob, allJobPost } from '../slice/home-slice'
import { FilterIcon, SearchIcon } from '../../../icons'
import { useState } from 'react'

export default function SearchBar() {
    const [input, setInput] = useState({
        searchText: '',
        provinceId: '',
    })
    const dispatch = useDispatch()
    const handdleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handdleSearch = (e) => {
        if (input.searchText.trim() == '' && input.provinceId == '') {
            dispatch(allJobPost()).unwrap()
            return
        }
        const payload = {
            searchText: input.searchText,
            provinceId: input.provinceId,
        }

        dispatch(searchJob(payload)).unwrap()
    }

    return (
        <div className="flex justify-center text-success bg-white">
            {/* inputrow1#แถวการค้นหา */}
            <div className=" flex justify-center items-center w-fit gap-6 shadow-lg p-5 rounded-xl">
                <div className="flex justify-center items-center">
                    <input
                        className="text-md pl-4 h-[50px] w-[260px] rounded-lg border border-primary"
                        placeholder="Keyword"
                        name="searchText"
                        value={input.searchText}
                        onChange={handdleChangeInput}
                    />
                </div>
                <div>
                    <select
                        name="provinceId"
                        id="provinceId"
                        onChange={handdleChangeInput}
                        value={input.provinceId}
                        className="text-md pl-2 h-[50px] w-[160px] rounded-lg border border-primary"
                    >
                        <option
                            className="text-gray-400"
                            value=""
                            disabled
                            selected
                        >
                            Select location
                        </option>
                        <option value="1">Bangkok</option>
                        <option value="2">Pathumtani</option>
                        <option value="3">Chiangmai</option>
                        <option value="4">Chonburi</option>
                        <option value="5">Phuket</option>
                        <option value="6">Rayong</option>
                        <option value="7">Khonkaen</option>
                        <option value="8">Chachoengsao</option>
                        <option value="9">Samutsakhon</option>
                        <option value="10">Ayutthaya</option>
                        <option value="11">Nonthaburi</option>
                    </select>
                </div>

                <div className="flex justify-end w-[160px] items-center ">
                    <button
                        onClick={handdleSearch}
                        className="flex transition ease-out duration-500 justify-center items-center gap-1 bg-success hover:bg-primary text-base-100 text-md py-1 px-4 rounded-lg w-[130px] h-[50px]"
                    >
                        <SearchIcon /> Search
                    </button>
                </div>
            </div>
        </div>
    )
}
