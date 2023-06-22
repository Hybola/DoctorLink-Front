import React from "react";

export default function Header() {
  return (
    <div>
      <div className=" h-[80px] ">
        <div className=" bg-primary  w-full h-[80px] flex  justify-end gap-10 pr-10 text-2xl font-thin items-center">
          <div className=" p-2 text-base-100 hover:text-accent">Login</div>
          <div className="p-2 text-base-100 hover:text-accent">Register</div>
        </div>
      </div>
    </div>
  );
}
