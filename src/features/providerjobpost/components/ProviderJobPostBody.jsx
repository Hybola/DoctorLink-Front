import ProviderJobCard from './ProviderJobCard'
import { useDispatch, useSelector } from 'react-redux'
import { savedPost, interestedPost } from '../slice/providerjobpost-slice'

export default function ProviderJobPostBody() {
    const jobPost = useSelector((state) => state.providerjobpost?.post)

    const dispatch = useDispatch()
    const handdleSaveJob = (e) => {
        dispatch(savedPost({ id: e.target.id, post: jobPost }))
    }
    const handleinterestJob = (e) => {
        dispatch(interestedPost({ id: e.target.id, post: jobPost }))
    }

    const jobPostList = jobPost.map((post) => {
        return (
            <ProviderJobCard
                post={post}
                key={post.id}
                handleClick1={handleinterestJob}
                handleClick2={handdleSaveJob}
            />
        )
    })
    return (
        <div className="flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 rounded-b-lg    p-[20px]  overflow-auto">
            {jobPostList}
        </div>
    )
}
