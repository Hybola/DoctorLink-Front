import ProviderJobPostHeader from './ProviderJobPostHeader'
import ProviderJobPostBody from './ProviderJobPostBody'
import * as postService from '../../../api/post-api'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function ProviderJobPostPage() {
    const [jobPost, setJobPost] = useState([])
    const { providerId, postId } = useParams()

    useEffect(() => {
        if (postId == 0) {
            postService.getPostByProviderId(providerId).then((rs) => {
                setJobPost(rs.data)
            })
        } else {
            postService.getPostById(postId).then((rs) => {
                setJobPost(rs.data)
            })
        }
    }, [])

    return (
        <>
            <div className=" max-w-[1000px]  min-w-[600px] w-[700px] bg-base-100 rounded-lg my-4 shadow-lg  ">
                {postId == 0 ? (
                    <>
                        <ProviderJobPostHeader />
                        <hr />
                    </>
                ) : null}
                <ProviderJobPostBody
                    jobPost={jobPost}
                    setJobPost={setJobPost}
                />
            </div>
        </>
    )
}
