import React from 'react'

export default function PreviewPart({ detail }) {
    return (
        <div className="mt-2 font-semibold">
            <div className="flex flex-col gap-3 mt-2">
                <div>Job Title : {detail.title}</div>
                <div>Location : {detail.location}</div>
                <div>Phone : {detail.phone}</div>
                <div>Line ID : {detail.line}</div>
                <div>Job Type : {detail.jobType}</div>
                <div>Job Description : {detail.jobDes}</div>
                <div>Start Date Time :{detail.startDateTime}</div>
                <div>End Date Time :{detail.endDateTime}</div>
                <div>Salary :{detail.wage}</div>
                <div>Other :{detail.other}</div>
            </div>
        </div>
    )
}
