import React from 'react'
import JobPost from '../components/JobPost'
export default function PageRight() {
    return (
        <div>
            <div className=" min-w-[720px] h-[740px] bg-base-100  overflow-auto">
                <JobPost />
            </div>
        </div>
    )
}
