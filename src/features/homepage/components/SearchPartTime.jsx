import React from "react";

export default function SearchPartTime({ input, setInput }) {
  const handleFilter = (e) => {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const wage = document.getElementById("wage").value;
    console.log(wage);

    const alljob = [
      {
        providerName: "โรงพยาบาลพญาไท1",
        location: "BTSสนามเป้า",
        jobType: "Part-Time",
        jobTitle: "รับหมอด่วนแผนก GP",
        startDate: "01/08/2566",
        endDate: "01/08/2566",
        wage: "6000",
      },
      {
        providerName: "โรงพยาบาลพญาไท2",
        location: "BTSสนามเป้า",
        jobType: "Part-Time",
        jobTitle: "รับหมอด่วนแผนก GP",
        startDate: "01/08/2566",
        endDate: "01/08/2566",
        wage: "8000",
      },
      {
        providerName: "โรงพยาบาลพญาไท3",
        location: "BTSสนามเป้า",
        jobType: "Part-Time",
        jobTitle: "รับหมอด่วนแผนก GP",
        startDate: "01/08/2566",
        endDate: "01/08/2566",
        wage: "10000",
      },
    ];
    const ans = alljob.filter(
      (job) => job.wage,
      job.providerName > 8000 && job.wage,
      job.provider < 10000
    );
    console.log(ans);
  };

  return (
    <div>
      {/* แถว2 เงินเดือน วันที่เริ่มงาน */}
      <div className="flex justify-start gap-5 row-span-1 p-5 pb-12 ml-11 items-center">
        {/* จากวันที่ */}
        <div className="flex gap-5">
          <div className="flex items-center text-lg">Start Date</div>
          <input
            type="date"
            name="startDate"
            id="startDate"
            className="border border-lg border-primary rounded-lg h-[50px] hover:bg-secondary shadow-lg text-xl px-4"
          />
        </div>

        {/* ถึงวันที่เท่าไร */}
        <div className="flex gap-5">
          <div className="flex items-center text-lg">To</div>
          <input
            type="date"
            name="endDate"
            id="endDate"
            className="border border-lg border-primary rounded-lg h-[50px] hover:bg-secondary shadow-lg text-xl px-4"
          />
        </div>
        {/* อัตราการจ้าง */}
        <select
          name="wage"
          id="wage"
          className="select  max-w-xs border border-primary shadow-lg h-[50px] hover:bg-secondary w-[150px]"
        >
          <option disabled selected>
            Wage/Hour
          </option>
          <option>{"<1000"}</option>
          <option>1000-3000</option>
          <option>3000-6000</option>
          <option>6000-10000</option>
          <option>{">10000"}</option>
        </select>
        <div className="flex items-center">
          <button
            onClick={handleFilter}
            className="bg-primary w-[100px]  h-[50px] text-xl text-base-100  rounded-lg p-2 hover:bg-success"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
