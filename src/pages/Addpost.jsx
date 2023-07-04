import { useEffect, useState } from 'react'
import FullTime from '../features/addpost/component/FullTime'
import PartTime from '../features/addpost/component/PartTime'
import axios from '../api/thisAxios'
import { useNavigate } from 'react-router-dom'
import Preview2 from '../features/addpost/component/Preview2'
import InputErrorMessage from '../components/InputErrorMessage'
// import validatecreatepost from '../validator/validatorAddpost'

const initial = {
    title: '',
    location: '',
    map: '',
    line: '',
    phone: '',
    jobDes: '',
    workingDay: '',
    startDate: '',
    salary: '',
    annual: '',
    benefit: '',
    other: '',
    endDate: '',
    wage: '',
    provinceId: '',
}
export default function Addpost() {
    const [input, setInput] = useState(initial)
    const [page, setPage] = useState('FullTime')
    // const [error, setError] = useState({})

    const navigate = useNavigate()

    const hdlnavigate = () => {
        navigate('/provider/history/')
    }

    const hdlchange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const hdlsumbit = async (e) => {
        e.preventDefault()
        const payload = {
            ...input,
            jobType: page,
        }
        // const result = validate(input)
        // if (result) {
        //     return setError(result)
        // }
        // setError({})

        try {
            await axios.post('/post/createpost', payload)
            navigate('/provider/history/')
        } catch (error) {
            console.log(error)
        }
    }
    const hdlfull = (e) => {
        setPage(e.target.value)
    }

    return (
        <div className="w-full h-screen bg-[#F5FBFC] flex flex-col items-center p-8 gap-4">
            <div className="w-[90%] bg-success h-[40px] rounded-lg flex justify-center items-center text-2xl font-semibold text-white">
                Create Job Post
            </div>
            <div className="w-[90%] h-[600px] flex gap-6 justify-center text-success font-semibold">
                {/* Left */}
                <div className="w-[90%] max-w-[400px] min-w-[400px]  bg-base-100 rounded-lg shadow-lg p-8 flex flex-col gap-2 ">
                    <div className="flex flex-col gap-1">
                        <div>Job Title</div>
                        <div className="w-full">
                            <input
                                type="text"
                                className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                value={input.title}
                                onChange={hdlchange}
                                name="title"
                                // isInvalid={error.title}
                            />
                            {/* <InputErrorMessage message={error.title} /> */}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>Location</div>
                        <div className="w-full  ">
                            <input
                                type="text"
                                className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                value={input.location}
                                onChange={hdlchange}
                                name="location"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>Province</div>
                        <div className="w-full  ">
                            <div>
                                <select
                                    name="provinceId"
                                    id="provinceId"
                                    onChange={hdlchange}
                                    value={input.provinceId}
                                    className="text-md pl-2 h-[50px] w-full rounded-lg border border-primary"
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
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>Google Map</div>
                        <div className="w-full  ">
                            <input
                                type="text"
                                className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                value={input.map}
                                onChange={hdlchange}
                                name="map"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>Phone</div>
                        <div className="w-full ">
                            <input
                                type="text"
                                className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                value={input.phone}
                                onChange={hdlchange}
                                name="phone"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>Line ID</div>
                        <div className="w-full  ">
                            <input
                                type="text"
                                className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                value={input.line}
                                onChange={hdlchange}
                                name="line"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>Job Type</div>
                        <select
                            name="JobType"
                            className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                            onChange={hdlfull}
                            id="jobType"
                        >
                            <option value={'FullTime'}>Full-time</option>
                            <option value={'PartTime'}>Part-time</option>
                        </select>
                    </div>
                </div>

                {/* Right */}
                {page === 'FullTime' ? (
                    <FullTime add={input} hdl={hdlchange} />
                ) : (
                    <PartTime add={input} hdl={hdlchange} />
                )}
            </div>
            <div className="flex justify-between w-[90%] items-center">
                <button
                    className=" text-primary text-base font-semibold cursor-pointer hover:bg-blue-200 btn bg-transparent border-transparent"
                    onClick={() => window.preview.showModal()}
                    style={{ textTransform: 'none' }}
                >
                    Preview
                </button>
                <div className="w-[300px] flex justify-between">
                    <button
                        className="btn w-[120px] text-base"
                        style={{ textTransform: 'none' }}
                        onClick={hdlnavigate}
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="btn w-[120px] bg-success text-white hover:bg-primary text-base"
                        style={{ textTransform: 'none' }}
                        onClick={hdlsumbit}
                    >
                        Create
                    </button>
                </div>
            </div>
            {/* Modal */}
            <dialog id="preview" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[800px] p-12 text-base font-semibold text-success"
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-4">
                        ✕
                    </button>
                    <Preview2 post={input} p={page} />
                    <div className="modal-action">
                        <button
                            className="btn w-[120px] text-base"
                            style={{ textTransform: 'none' }}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </dialog>
            {/* Modal */}
        </div>
    )
}
