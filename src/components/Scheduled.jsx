import PropTypes from 'prop-types';
import ColorPicker from './ColorPicker';
export default function Scheduled({
  scheduled,
  showScheduled,
  title,
  setTitle,
  setStartHour,
  setStartMinutes,
  setStartPeriod,
  setEndHour,
  setEndMinutes,
  setEndPeriod,
  startHour,
  startMinutes,
  startPeriod,
  endHour,
  endMinutes,
  endPeriod,
  desc,
  selectedDate,
  repeatBtn,
  colors,
  handleColorSelect,
  setSelectedColor,
  selectedColor,
  handleAddEvent,
  addTitles,
  setScheduled,
  guests,
  setGuests,
}) {
  const meetingID = localStorage.getItem('meetingId');
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  const startTime = startHour + ':' + startMinutes + ' ' + startPeriod;
  const endTime = endHour + ':' + endMinutes + ' ' + endPeriod;
  // const meetingDate = selectedDate.toLocaleDateString('en-US', options);
  const closeScheduled = () => {
    setScheduled(false);
    setTitle('');
    setStartHour('12');
    setStartMinutes('00');
    setStartPeriod('PM');
    setEndHour('12');
    setEndMinutes('00');
    setEndPeriod('PM');
    setGuests([]);
  };
  return (
    <div>
      {scheduled && (
        <div className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center ">
          <div className="bg-white m-auto h-fit w-fit font-inter relative rounded-2xl pb-6">
            <div className="border-b">
              <img
                onClick={closeScheduled}
                src="/cross.svg"
                alt=""
                width={13}
                className="absolute right-[25px] pt-[8px]"
              />
              <input
                className="text-center py-[15px] font-inter font-semibold text-[14px] outline-none rounded-2xl w-full "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex justify-end mr-6 gap-2 mt-2 text-[#454545]">
              <button className="border px-[4px] my-[4px] text-[8px] flex gap-2 items-center rounded-sm">
                EDIT
                <img src="/edit.svg" alt="" width={12} />
              </button>
              <button className="border px-[4px] my-[4px] text-[8px] flex gap-2 items-center rounded-sm">
                DELETE <img src="/delete.svg" alt="" width={8} />
              </button>
            </div>
            <div className="mx-6 my-2">
              <div className="border w-[40px] py-[6px] px-[8px] rounded-sm flex justify-center">
                <ColorPicker
                  colors={colors}
                  onSelect={handleColorSelect}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />
              </div>
            </div>

            <div className="mx-6 relative">
              <p className="text-[10px] font-semibold pt-2">Join with TMmeet</p>
              <input
                type="text"
                className="w-full border border-[#D0D5DD] bg-[#F4F4F4] py-[2px] px-[3px] my-[4px] rounded-lg shadow-sm"
              />
              <div className="absolute text-[9px] text-[#667085] left-2 bottom-[12px] font-inter tracking-tight text-nowrap ">
                <p className="w-[190px] overflow-x-clip">
                  {meetingID}
                  <img
                    width={14}
                    src="/tabler_copy.svg"
                    alt=""
                    className="absolute -top-[1px] -right-[20px]"
                  />
                </p>
              </div>
            </div>
            <div className="mx-6">
              <p className="flex items-center gap-2 py-[4px] tracking-tight">
                <span className="text-[10px]">
                  {selectedDate.toLocaleDateString('en-US', options)}
                </span>
                <img src="/dot.svg" alt="" width={3} />
                <span className="text-[10px]">
                  {startTime} - {endTime}
                </span>
              </p>
              <button className="bg-[#36AAD9] bg-opacity-15 text-[#36AAD9] text-[8px] px-2 py-[4px] rounded-sm">
                {repeatBtn}
              </button>
            </div>
            <div className="mx-6 mt-2 ">
              <p className="flex gap-2 text-[10px] font-medium">
                <img src="/people.svg" alt="" width={15} />
                Guests
              </p>
              {
                guests && (
                  <ul className="text-[9px] mt-[4px] list-disc mx-4">
                    {guests.map((guest, index) => (
                      <li key={index} className="font-semibold font-DMSans">
                        {guest}
                      </li>
                    ))}
                  </ul>
                )
                // : (
                //   <img
                //     src="/noguest.svg"
                //     alt=""
                //     width={60}
                //     className="mx-16 mt-4"
                //   />
                // )
              }
              {/* <div className="flex gap-2 items-center mt-2">
                <img src="/A.svg" alt="" />
                <p className="text-[9px]  ">
                  Adekunle Samson <br />
                  <span className="text-[8px] font-normal text-[#667085]">
                    Adekunlesam007@gmail.com
                  </span>
                </p>
              </div>
              <div className="flex gap-2 items-center mt-2">
                <img src="/T.svg" alt="" />
                <p className="text-[9px] font-semibold font-DMSans">
                  Tomiwa Williams <br />
                  <span className="text-[8px] font-normal text-[#667085]">
                    Tomwilly1@gmail.com
                  </span>
                </p>
              </div> */}
            </div>
            <div className="mx-6 mt-2 text-[#344054]">
              <p className="flex gap-2 text-[10px] font-medium mt-4 font-inter">
                <img src="/description.svg" alt="" width={15} />
                Description
              </p>
              <p className="text-[9px] my-4 font-DMSans">{desc}</p>
            </div>
            <div className="mx-6 mt-2 text-[#344054]">
              <p className="flex gap-2 text-[10px] font-medium mt-4 font-inter">
                <img src="/BellRinging.svg" alt="" width={15} />
                Reminder
              </p>
              <p className="flex gap-2 text-[9px] items-center mt-2 font-DMSans">
                30 minutes before{' '}
                {/* <span>
                  <img src="/dot.svg" alt="" width={4} />
                </span>
                6:30 AM */}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Scheduled.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
};
Scheduled.propTypes = {
  guests: PropTypes.array.isRequired,
};
