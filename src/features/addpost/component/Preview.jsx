import React from 'react'

export default function Preview() {
    return (
        <div>
            <div className="bg-slate-600 h-20"></div>
            <div className="flex">
                <div className="h-24 w-24 bg-cyan-300 mt-[-50px] ml-4"></div>
                <div className="ml-4 mt-2">22/4/2023</div>
            </div>
            <div className="flex gap-8">
                <div className="font-bold">โรงพยาบาลพญาไท</div>
                <div>กรุงเทพมหานคร</div>
            </div>
            <hr className="mt-2 border-black"></hr>
            <div className="mt-2">
                <div className="font-bold mt-2">
                    Title : รับแพทย์ Full-Time , โรงพยาบาล xxx
                </div>
                <div className="font-bold mt-2">
                    Location : โรงพยาบาล บรรทัดทอง
                </div>
                <div className="font-bold mt-2">
                    Contract :<div className="font-thin">Phone 02-500-5000</div>
                </div>
                <div className="font-bold mt-2">Job Type : Full-Time</div>
                <div className="font-bold mt-2">
                    Job Description :
                    <div>
                        <p>-ผ่านการใช้ทุนแล้วประสบการณ์อย่างน้อย 3 ปี</p>
                        <p>-มีทักษะภาษาอังกฤษจะพิจารณาพิเศษ</p>
                        <p>-สามารถทำงานล่วงเวลาได้</p>
                        <p>-สามารถทำงานในวันเสาร์อาทิตย์ได้</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
