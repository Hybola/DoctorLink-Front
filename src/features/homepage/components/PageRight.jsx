import React from 'react'
import JobPost from '../../providerjobpost/components/JobPost'
export default function PageRight({ jobPost }) {
    return (
        <div>
            <div className=" min-w-[740px] h-[740px] bg-base-100 ">
                <JobPost
                    providerId={jobPost.providerId}
                    postId={jobPost.postId}
                />
            </div>
        </div>
    )
}
