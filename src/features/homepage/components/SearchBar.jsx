import React from "react";

export default function SearchBar({ input, setInput }) {
  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSearch = (e) => {
    console.log(input);
  };
  return (
    <div className=" ">
      {/* inputrow1#แถวการค้นหา */}
      <div className="flex pl-10 py-10 gap-7 border shadow-lg  bg-secondary">
        <div className="flex justify-center">
          <input
            className="bg-base-100 rounded-lg text-xl p-2 h-[50px] w-[320px] text-center border border-primary shadow-lg "
            placeholder="Find a Job"
            name="searchText"
            value={input.searchText}
            onChange={hdlChangeInput}
          />
        </div>

        <div>
          <input
            className="bg-base-100 rounded-lg text-xl p-2 h-[50px] w-[200px] text-center border border-primary shadow-lg"
            placeholder="Location"
            name="location"
            value={input.location}
            onChange={hdlChangeInput}
          />
        </div>
        {/* radio */}
        <div className="flex w-[300px] justify-between items-center min-w-[300px]">
          <div
            className="form-control "
            onClick={(e) => {
              const isParttime = input.isParttime;
              setInput({ ...input, isParttime: !isParttime });
            }}
          >
            <label className="label cursor-pointer gap-2">
              <span className="label-text">Part-Time</span>

              <input
                type="radio"
                name="radio-4"
                className="radio radio-primary"
                checked={input.isParttime}
              />
              <input
                type="radio"
                name="radio-4"
                className="radio radio-primary"
                checked={!input.isParttime}
              />

              <span className="label-text">Full-Time</span>
            </label>
          </div>
        </div>
        {/* จบก้อน swap */}
        <div className="flex justify-end w-[300px]">
          <button
            onClick={handleSearch}
            class="bg-primary hover:bg-success text-base-100 text-xl py-2 px-4  border-neutral rounded-lg shadow-lg w-[150px]"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
