export default function Scheduler() {
  return (
    <div>
      {/* {scheduler && ( */}
      <div className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer ">
        <div className="w-[320px] rounded-xl mx-auto h-5/6 my-[60px] bg-white relative">
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
            <ul className="flex gap-6 text-[11px] items-center border-b pb-2 px-6 relative">
              <li className="flex gap-[5px] text-[#36AAD9] items-center font-medium ">
                <img src="/event.svg" alt="" width={15} />
                Event
                <img
                  src="/highlight.svg"
                  alt=""
                  className="absolute bottom-0"
                  width={50}
                />
              </li>
              <li className="flex gap-[5px] text-[#667085] opacity-70 items-center">
                <img src="/description.svg" alt="" width={15} />
                Description
              </li>
              <li className="flex gap-[5px] text-[#667085] opacity-70 items-center">
                <img src="/alarm.svg" alt="" width={15} />
                Reminder
              </li>
            </ul>
            <div className="">
              <p className="font-DMSans px-6 py-[10px] text-[10px] font-semibold text-[#344054]">
                Meeting Date & Time
              </p>
              <div
                className="px-6 flex gap-2 items-center tracking-tight "
                id="date"
              >
                <button className="flex gap-2 items-center border px-[6px] py-[4px] rounded text-[9px] font-medium">
                  <img src="/greyCalendar.svg" alt="" width={13} /> 07-03-2024
                </button>
                <span className="text-[#777777] text-[10px]">To</span>
                <button className="flex gap-2 items-center border px-[6px] py-[4px] rounded text-[9px] font-semibold">
                  {' '}
                  <img src="/greyCalendar.svg" alt="" width={13} /> 07-03-2024
                </button>
              </div>
              <div
                className="px-6 py-[10px] flex gap-2 items-center tracking-tight"
                id="time"
              >
                <button className="flex gap-2 items-center border py-[4px] pl-[4px] pr-[23px] rounded text-[9px] font-semibold">
                  <img src="/clock.svg" alt="" width={13} /> 2 : 00 am
                </button>
                <span className="text-[#777777] text-[10px]">To</span>
                <button className="flex gap-2 items-center border py-[4px] pl-[4px] pr-[23px] rounded text-[9px] font-semibold">
                  <img src="/clock.svg" alt="" width={13} /> 2 : 00 am
                </button>
              </div>
              <div className="flex items-center gap-4 px-6">
                <p className="flex items-center gap-2 text-[10px] font-bold">
                  {' '}
                  All day
                  <img src="/select.svg" alt="" width={16} />
                </p>
                <p className="flex items-center gap-2 text-[10px] font-bold">
                  Repeat
                  <button className="flex gap-[30px] items-center border px-2 py-[1px] rounded font-normal text-[8px] text-[#667085] tracking-tight">
                    Never <img src="/dropdown.svg" alt="" width={8} />
                  </button>
                </p>
              </div>
            </div>
            <div className="relative py-4 px-6 ">
              <p className="text-[10px] font-semibold text-[#344054] border-t pt-[6px]">
                Add guests
              </p>
              <input
                type="text"
                placeholder="Add guest"
                className="border rounded w-3/4 mt-[6px] px-8 placeholder:text-[9px] placeholder:font-inter"
              />
              <img
                src="/people.svg"
                alt=""
                className="absolute top-[50px] left-[30px]"
                width={15}
              />
              <img
                src="/noguest.svg"
                alt=""
                width={60}
                className="mx-16 my-4"
              />
              <p className="text-[10px] font-semibold text-[#344054]">
                Add location
              </p>
              <input
                type="text"
                placeholder="Add location"
                className="border rounded w-3/4 mt-[6px] px-8 placeholder:text-[9px] placeholder:font-inter"
              />
              <img
                src="/location.svg"
                alt=""
                className="absolute bottom-[22px] left-[30px]"
                width={15}
              />
            </div>
          </div>
          <div className="border-t py-[6px] relative">
            <button className="border bg-[#36AAD9] px-[12px] py-[4px] rounded text-white text-[9px] absolute right-6">
              Save
            </button>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
