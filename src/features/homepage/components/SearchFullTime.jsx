import React from "react";

export default function SearchFullTime() {
  return (
    <div>
      {/* แถว2 เงินเดือน วันที่เริ่มงาน */}
      <div className="flex justify-start gap-80 pl-16  p-5 pb-12 items-center ">
        {/* จากวันที่ */}
        <div className="w-[800px] flex justify-start gap-5   ">
          <div className="flex pl-20">
            <div className="flex gap-5">
              <div className="flex items-center text-lg ">Start Work</div>
              <input
                type="date"
                name="startwork"
                id="startWork"
                className="border border-lg border-primary rounded-lg h-[50px] hover:bg-secondary shadow-lg text-xl px-4"
              />
            </div>
          </div>

          {/* อัตราการจ้าง */}
          <div className="flex  ">
            <select
              name="saraly"
              id="saraly"
              className="select w-full max-w-xs border border-primary shadow-lg h-[50px] hover:bg-secondary"
            >
              <option disabled selected>
                Saraly/Month
              </option>
              <option>{"<40000"}</option>
              <option>40000-100000</option>
              <option>100000-150000</option>
              <option>150000-200000</option>
              <option>{">200000"}</option>
            </select>
          </div>
          <div className="flex items-center">
            <button
              // onClick={handleFilter}
              className="bg-primary w-[100px]  h-[50px] text-xl text-base-100  rounded-lg p-2 hover:bg-success "
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
