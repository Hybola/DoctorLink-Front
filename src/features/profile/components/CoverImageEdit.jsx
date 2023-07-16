import { useDispatch, useSelector } from 'react-redux'
import { useState, useRef } from 'react'
import { uploadImage } from '../slice/profile-slice'

export default function CoverImageEdit({ currentCoverImage }) {
    const inputEl = useRef()
    const [file, setFile] = useState(null)
    const loading = useSelector((state) => state.profile?.loading)

    const dispatch = useDispatch()

    const classUpload = file
        ? 'btn w-[180px] btn-success font-semibold btn-success text-base text-white hover:border-primary hover:bg-primary'
        : 'btn w-[180px] font-semibold btn-disabled text-base'

    const classSelect = loading
        ? 'btn w-[180px]  bg-info p-2 rounded-lg flex justify-center items-center hover:bg-primary text-white  btn-disabled text-base'
        : 'btn w-[180px]  bg-success p-2 rounded-lg flex justify-center items-center text-white hover:bg-primary text-base'

    const updateCoverImage = async (input) => {
        const formData = new FormData()
        formData.append('coverImage', input)
        dispatch(uploadImage(formData))
    }

    return (
        <>
            <dialog id="CoverImageEdit" className="modal">
                <input
                    type="file"
                    className="hidden"
                    ref={inputEl}
                    onChange={(e) => {
                        if (e.target.files[0]) {
                            setFile(e.target.files[0])
                        }
                    }}
                />
                <form
                    method="dialog"
                    className="modal-box mt-[200px] bg-base-100 pb-10"
                >
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => {
                            setFile(null)
                            inputEl.current.value = ''
                        }}
                    >
                        ✕
                    </button>
                    <div className="flex flex-col h-[300px] justify-between">
                        <div className="flex justify-center mb-4">
                            <h3 className="font-bold text-lg">
                                Edit Cover Image
                            </h3>
                        </div>
                        <div className="w-full h-[200px] bg-base-300 rounded-lg">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : currentCoverImage
                                }
                                alt="coverImage"
                                className="w-full h-[200px] rounded-lg object-cover"
                            />
                        </div>

                        <div className="w-full flex justify-around items-center mt-6">
                            <div
                                className={classSelect}
                                style={{ textTransform: 'none' }}
                                onClick={() => inputEl.current.click()}
                            >
                                Select Image
                            </div>
                            <div className="modal-action flex items-center mt-0">
                                {loading ? (
                                    <button
                                        className="btn"
                                        style={{ textTransform: 'none' }}
                                    >
                                        <span className="loading loading-spinner"></span>
                                        Image is uploading
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            className={classUpload}
                                            style={{ textTransform: 'none' }}
                                            onClick={(e) => {
                                                updateCoverImage(file)
                                                e.preventDefault()
                                                inputEl.current.value = ''
                                            }}
                                        >
                                            Upload
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    )
}
