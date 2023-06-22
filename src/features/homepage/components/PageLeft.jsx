import React from "react";
import Jobcard from "./Jobcard";

export default function PageLeft() {
  const joblist = [
    {
      providerName: "โรงพยาบาลพญาไท1",
      location: "BTSสนามเป้า",
      jobType: "Full-Time",
      jobTitle: "รับหมอด่วนแผนก GP",
      startDate: "01/08/2566",
      saraly: "100000",
    },
    {
      providerName: "โรงพยาบาลพญาไท2",
      location: "BTSสนามเป้า",
      jobType: "Full-Time",
      jobTitle: "รับหมอด่วนแผนก GP",
      startDate: "01/08/2566",
      saraly: "100000",
    },
    {
      providerName: "โรงพยาบาลพญาไท3",
      location: "BTSสนามเป้า",
      jobType: "Full-Time",
      jobTitle: "รับหมอด่วนแผนก GP",
      startDate: "01/08/2566",
      saraly: "100000",
    },
  ];

  const job = joblist.map((j) => <Jobcard jobpost={j} />);
  return (
    <div className="h-[700px] w-[500px] flex flex-col gap-4 items-center overflow-auto">
      {/* ส่วนของการ์ดงานด้านซ้าย */}
      {job}
    </div>
  );
}
