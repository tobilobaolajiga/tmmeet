export default function Description() {
  return (
    <div>
      <div className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center items-center">
        <div className="w-[300px] rounded-xl h-1/2 bg-white relative">
          <div className="border-b">
            <img
              src="/cross.svg"
              alt=""
              width={13}
              className="absolute right-[25px] pt-[8px]"
            />
            <p className="text-center py-[13px] font-inter font-semibold text-[14px]">
              Schedule New Meeting
            </p>
          </div>
          <div className="py-4 px-6 font-inter">
            <p className="text-[10px] font-medium opacity-95 pb-[6px]">
              Meeting Title
            </p>
            <div className="flex ">
              <input
                type="text"
                placeholder="Add title"
                className="border py-[2px] px-4 placeholder:opacity-50 w-4/5 rounded-l-lg placeholder:text-[11px] placeholder:text-[#667085]"
              />
              <button className="border py-[6px] px-[8px] flex gap-2 items-center rounded-r-lg border-l-0">
                <img src="/themeColor.svg" alt="" width={14} />
                <img src="/dropdown.svg" alt="" width={13} />
              </button>
            </div>
          </div>
          <div className=" pt-[12px] ">
            <ul className="flex gap-6 text-[11px] text-[#667085] items-center border-b pb-2 px-6 relative">
              <li className="flex gap-[5px]  items-center  ">
                <img src="/nocolEvent.svg" alt="" width={15} />
                Event
              </li>
              <li className="flex gap-[5px] text-[#36AAD9] opacity-70 items-center font-medium">
                <img src="/colDesc.svg" alt="" width={15} />
                Description
                <img
                  src="/highlight.svg"
                  alt=""
                  className="absolute bottom-0"
                />
              </li>
              <li className="flex gap-[5px] text-[#667085] opacity-70 items-center">
                <img src="/alarm.svg" alt="" width={15} />
                Reminder
              </li>
            </ul>
            <div className="py-[12px] px-6 relative border-b">
              <p className="text-[10px] font-semibold text-[#344054] tracking-tight pb-[4px]">
                Add description or attachment
              </p>
              <input
                type="text"
                placeholder="Type in your words"
                className="border px-[6px] pb-10 w-full rounded placeholder:text-[9px] "
              />
              <img
                src="/attach.svg"
                alt=""
                width={18}
                className="absolute bottom-4 left-8"
              />
            </div>
          </div>
          <div className=" py-[6px] relative">
            <button className="border bg-[#36AAD9] px-[12px] py-[4px] rounded text-white text-[9px] absolute right-6">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
