import ProviderJobCard from './ProviderJobCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    setDefaultJobRightPage,
    savedPostHome,
    interestedPostHome,
} from '../slice/home-slice'

export default function JopPost() {
    const jobPost = useSelector((state) => state.home?.post[0])
    const filterJob = useSelector((state) => state.home?.filterJob[0])
    const dispatch = useDispatch()

    const naviagte = useNavigate()
    const defaultCoverImage =
        'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1685524621/gqjpy7avowkrwuzlnqju.jpg'
    const defaultProfileImage =
        'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687202073/Screen_Shot_2566-06-20_at_02.13.58_tncfxz.png'
    const currentCoverImage = jobPost?.providerCoverImage || defaultCoverImage
    const currentProfileImage =
        jobPost?.providerProfileImage || defaultProfileImage

    // const currentCardNew

    const handdleSaveJob = (e) => {
        dispatch(
            savedPostHome({
                id: e.target.id,
            })
        ).unwrap()
    }
    const handdleinterestJob = (e) => {
        dispatch(
            interestedPostHome({
                id: e.target.id,
            })
        )
    }

    return (
        <div className="w-[700px]">
            <div className=" h-[220px] mb-[60px]">
                <div className="w-full h-[200px] bg-base-300 rounded-t-lg">
                    {/* <img
                        src={currentCoverImage}
                        alt="coverImage"
                        className="w-full h-[200px] rounded-t-lg object-cover"
                    /> */}
                </div>
                <div>
                    <div className="w-[150px] h-[150px] bg-info -my-[114px] ml-[28px] shadow-lg flex justify-center items-center ">
                        <img
                            src={currentProfileImage}
                            alt="profileImage"
                            className="w-[150px] h-[150px] object-cover border-4 border-white cursor-pointer"
                            onClick={() =>
                                naviagte(
                                    `/doctor/provider/${jobPost?.providerId}/post/0`
                                )
                            }
                        />
                    </div>
                </div>
                <div
                    className=" text-2xl font-bold mt-[120px] ml-4 cursor-pointer"
                    onClick={() =>
                        naviagte(
                            `/doctor/provider/${jobPost?.providerId}/post/0`
                        )
                    }
                >
                    {jobPost?.providerName}
                </div>
            </div>

            <hr />
            <ProviderJobCard
                post={jobPost}
                handleClick1={handdleinterestJob}
                handleClick2={handdleSaveJob}
            />
        </div>
    )
}
