// import ProviderJobPostHeader from './ProviderJobPostHeader'
import ProviderJobPostBody from './ProviderJobPostBody'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    getPostByProviderId,
    getPostById,
} from '../slice/providerjobpost-slice'

export default function ProviderJobPostPage() {
    const { providerId, postId } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        if (postId == 0) {
            dispatch(getPostByProviderId(providerId)).unwrap()
        } else {
            dispatch(getPostById(postId)).unwrap()
        }
    }, [])

    return (
        <>
            <div className=" max-w-[1000px]  min-w-[600px] w-[700px] bg-base-100 rounded-lg my-4 shadow-lg  ">
                {/* {postId == 0 ? (
                    <>
                        <ProviderJobPostHeader />
                        <hr />
                    </>
                ) : null} */}
                <ProviderJobPostBody />
            </div>
        </>
    )
}
