import React from 'react'

export default function PreviewFull({ detail }) {
    return (
        <div className="mt-2 font-semibold">
            <div className="flex flex-col gap-3 mt-2">
                <div>Job Title : {detail.title}</div>
                <div>Location : {detail.location}</div>
                <div>Phone : {detail.phone}</div>
                <div>Line ID : {detail.line}</div>
                <div>Job Type : {detail.jobType}</div>
                <div>Job Description : {detail.jobDes}</div>
                <div>Working Day : {detail.workingDay}</div>
                <div>Start Date : {detail.startDate}</div>
                <div>Salary : {detail.salary}</div>
                <div>Annual holiday : {detail.annual}</div>
                <div>Benefit : {detail.benefit}</div>
                <div>Other : {detail.other}</div>
            </div>
        </div>
    )
}
