import ColorPicker from './ColorPicker';
export default function Reminder({
  reminder,
  showReminder,
  showDescription,
  showScheduler,
  closeReminder,
  title,
  showScheduled,
  colors,
  handleColorSelect,
  setSelectedColor,
  selectedColor,
}) {
  const showDesc = () => {
    !showReminder();

    showDescription();
  };

  const showSchedu = () => {
    !showReminder();

    showScheduler();
  };
  return (
    <div>
      {reminder && (
        <div className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center items-center">
          <div className="w-fit rounded-xl h-fit bg-white relative">
            <div className="border-b">
              <img
                src="/cross.svg"
                alt=""
                width={13}
                className="absolute right-[25px] pt-[8px]"
                onClick={closeReminder}
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
                  value={title}
                  type="text"
                  placeholder="Add title"
                  className="border py-[4px] px-4 placeholder:opacity-50 w-4/5 rounded-l-lg placeholder:text-[11px] placeholder:text-[#667085] text-[10px] font-semibold font-inter"
                />
                <div className="border py-[6px] px-[8px] flex gap-2 items-center rounded-r-lg border-l-0">
                  <ColorPicker
                    colors={colors}
                    onSelect={handleColorSelect}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                </div>
              </div>
            </div>
            <div className=" pt-[12px] ">
              <ul className="flex gap-6 text-[11px] text-[#667085] items-center border-b pb-2 px-6 relative">
                <li
                  className="flex gap-[5px]  items-center  "
                  onClick={showSchedu}
                >
                  <img src="/nocolEvent.svg" alt="" width={15} />
                  Event
                </li>
                <li
                  className="flex gap-[5px]  text-[#667085] opacity-70 items-center "
                  onClick={showDesc}
                >
                  <img src="/description.svg" alt="" width={15} />
                  Description
                </li>
                <li
                  className="flex gap-[5px] text-[#36AAD9] opacity-70 items-center font-medium"
                  onClick={showReminder}
                >
                  <img src="/colAlarm.svg" alt="" width={15} />
                  Reminder
                  <img
                    src="/highlight.svg"
                    alt=""
                    className="absolute bottom-0"
                  />
                </li>
              </ul>
              <div className="py-[10px] px-6 relative">
                <div>
                  <p className="text-[10px] pb-[5px] font-semibold">
                    Reminder 1
                  </p>
                  <button className="flex gap-2 items-center border px-[6px] py-[4px] rounded text-[9px] font-medium mb-[5px]">
                    <img src="/greyCalendar.svg" alt="" width={13} /> 07-03-2024
                  </button>
                  <button className="flex gap-2 items-center border py-[4px] pl-[4px] pr-[23px] rounded text-[9px] font-semibold mb-[5px]">
                    <img src="/clock.svg" alt="" width={13} /> 2 : 00 am
                  </button>
                </div>
                <div>
                  <p className="text-[10px] pb-[5px] font-semibold">
                    Reminder 2
                  </p>
                  <button className="flex gap-2 items-center border px-[6px] py-[4px] rounded text-[9px] font-medium mb-[4px]">
                    <img src="/greyCalendar.svg" alt="" width={13} /> 07-03-2024
                  </button>
                  <button className="flex gap-2 items-center border py-[4px] pl-[4px] pr-[23px] rounded text-[9px] font-semibold mb-[5px]">
                    <img src="/clock.svg" alt="" width={13} /> 2 : 00 am
                  </button>
                </div>
              </div>
            </div>
            <div className=" py-[6px] flex justify-end">
              <button
                onClick={showScheduled}
                className="border bg-[#36AAD9] px-[12px] py-[4px] rounded text-white text-[9px] mr-6"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
