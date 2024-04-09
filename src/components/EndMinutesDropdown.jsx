import { useState } from 'react';
import './hourdropdown.css';
export default function EndMinutesDropdown({
  endMinutes,

  minutes,
  setEndMinutes,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const endMinutesChange = (minute) => {
    setEndMinutes(minute);
    // onSelect(minute);
    setIsOpen(false);
  };
  return (
    <div className="dropdown-hour font-DMSans">
      <div onClick={toggleDropdown}>
        {endMinutes}
        {isOpen && (
          <div className="hour-options overflow-y-scroll h-[100px]">
            {minutes.map((minute, index) => (
              <div
                key={index}
                className=" hour-option hover:text-[#36aad9]"
                onClick={() => endMinutesChange(minute)}
              >
                {minute}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
