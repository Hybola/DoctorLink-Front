import ProviderJobCard from './ProviderJobCard'
import * as myjobService from '../../../api/myjob-api'

export default function ProviderJobPostBody({ jobPost, setJobPost }) {
    const handleinterestJob = (e) => {
        myjobService.uptoInterestJob(e.target.id).then((rs) => {
            if (rs.data[0] > 0) {
                const indexActionJob = jobPost.findIndex(
                    (post) => post.id == e.target.id
                )
                const cloneJobPost = [...jobPost]
                cloneJobPost[indexActionJob].jobStatus = 2
                setJobPost(cloneJobPost)
            }
        })
    }
    const jobPostList = jobPost.map((post) => {
        return (
            <ProviderJobCard
                post={post}
                key={post.id}
                handleClick1={handleinterestJob}
            />
        )
    })
    return (
        <div className="flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 rounded-b-lg    p-[20px]  overflow-auto">
            {jobPostList}
        </div>
    )
}
