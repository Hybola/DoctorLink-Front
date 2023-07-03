import { useEffect, useState } from 'react'
import FullTime from '../features/addpost/component/FullTime'
import PartTime from '../features/addpost/component/PartTime'
import axios from '../api/thisAxios'
import Preview from '../features/addpost/component/Preview'
import { useNavigate } from 'react-router-dom'

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
}
export default function Addpost() {
    const [input, setInput] = useState(initial)
    const [page, setPage] = useState('FullTime')

    const navigate = useNavigate()

    const hdlchange = (e) => {
        console.log(e.target.value)
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const hdlsumbit = async (e) => {
        e.preventDefault()
        const payload = {
            ...input,
            provinceId: '1',
            jobType: page,
        }
        console.log(payload)
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
        <div className="w-full flex flex-col items-center p-4 gap-4">
            <div className="w-[98%] bg-primary h-[40px] rounded-lg flex justify-center items-center p-4   text-2xl font-bold text-white">
                Create Job New post
            </div>
            <div className="w-[98%] flex gap-6 justify-center">
                {/* Left */}
                <div className="w-[400px] max-w-[400px] min-w-[400px] h-[500px] bg-base-100 rounded-lg shadow-lg p-4 flex flex-col gap-1">
                    <div className="w-full flex items-center text-xl font-bold mb-2">
                        Post a Job Now
                    </div>
                    <div className="flex flex-col ">
                        <div>Job Title</div>
                        <div className="w-full  ">
                            <input
                                type="text"
                                className="w-full  h-[40px] p-2 border border-primary rounded-lg "
                                value={input.title}
                                onChange={hdlchange}
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
                                value={input.location}
                                onChange={hdlchange}
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
                                value={input.map}
                                onChange={hdlchange}
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
                                value={input.phone}
                                onChange={hdlchange}
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
                                value={input.line}
                                onChange={hdlchange}
                                name="line"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <select
                            name="JobType"
                            className="w-full mt-4 h-[40px] border border-primary rounded-lg"
                            onChange={hdlfull}
                            id="jobType"
                        >
                            <option value={'FullTime'}>Full Time</option>
                            <option value={'PartTime'}>Part Time</option>
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
            <div className="flex justify-between w-full ml-[120px]">
                <div
                    className=" text-blue-600 text-xl font-bold cursor-pointer"
                    onClick={() => window.preview.showModal()}
                >
                    Preview
                </div>
                <div className="w-[350px] flex justify-between mr-[120px]">
                    <button className="btn w-[150px] "> BACK</button>
                    <button
                        type="submit"
                        className="btn btn-primary hover:bg-success w-[150px] text-white"
                        onClick={hdlsumbit}
                    >
                        CREATE
                    </button>
                </div>
            </div>
            {/* Modal */}
            <dialog id="preview" className="modal">
                <form
                    method="dialog"
                    className="modal-box min-w-[1100px] w-[1100px] max-w-[1100px] overflow-auto"
                >
                    <Preview add={input} p={page} />
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
            {/* Modal */}
        </div>
    )
}
