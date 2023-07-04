import * as postService from '../../../api/post-api'
import { useState, useEffect } from 'react'
import ProviderJobCard from '../../providerjobpost/components/ProviderJobCard'
import * as myjobService from '../../../api/myjob-api'
import * as profileService from '../../../api/profile-api'
import { useNavigate } from 'react-router-dom'

export default function JopPost({ providerId, postId }) {
    const [jobPost, setJobPost] = useState([])
    const [profileProvider, setProviderProfile] = useState({})

    const naviagte = useNavigate()
    const defaultCoverImage =
        'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1685524621/gqjpy7avowkrwuzlnqju.jpg'
    const defaultProfileImage =
        'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687202073/Screen_Shot_2566-06-20_at_02.13.58_tncfxz.png'
    const currentCoverImage = jobPost?.providerCoverImage || defaultCoverImage
    const currentProfileImage =
        jobPost?.providerProfileImage || defaultProfileImage
    const handleinterestJob = (e) => {
        myjobService.uptoInterestJob(e.target.id).then((rs) => {
            if (rs.data[0] > 0) {
                const cloneJobPost = { ...jobPost }
                cloneJobPost.jobStatus = 2
                setJobPost(cloneJobPost)
            }
        })
    }

    useEffect(() => {
        postService.getPostById(postId).then((rs) => {
            setJobPost(rs.data[0])
        })
        profileService.providerProfile(providerId).then((rs) => {
            setProviderProfile(rs.data)
        })
    }, [])

    return (
        <div className="w-[700px]">
            <div className=" h-[220px] mb-[60px]">
                <div className="w-full h-[200px] bg-base-300 rounded-t-lg">
                    <img
                        src={currentCoverImage}
                        alt="coverImage"
                        className="w-full h-[200px] rounded-t-lg object-cover"
                    />
                </div>
                <div>
                    <div className="w-[150px] h-[150px] bg-info -my-[114px] ml-[28px] shadow-lg flex justify-center items-center ">
                        <img
                            src={currentProfileImage}
                            alt="profileImage"
                            className="w-[150px] h-[150px] object-cover border-4 border-white"
                            onClick={() =>
                                naviagte(
                                    `/doctor/provider/${providerId}/post/0`
                                )
                            }
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2 text-success">
                    <div className="w-[200px] h-[10px] ml-[200px] mt-[80px] flex justify-start gap-2">
                        <div className="flex justify-start gap-1">
                            <div>{profileProvider?.follower}</div>
                            <div>follower</div>
                        </div>
                    </div>
                </div>
                <div
                    className=" text-2xl font-bold mt-8"
                    onClick={() =>
                        naviagte(`/doctor/provider/${providerId}/post/0`)
                    }
                >
                    {jobPost?.providerName}
                </div>
            </div>

            <hr />
            <ProviderJobCard post={jobPost} handleClick1={handleinterestJob} />
        </div>
    )
}
