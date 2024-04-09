import { useState } from 'react';
import './hourdropdown.css';
export default function MinutesDropdown({
  startMinutes,
  onSelect,
  minutes,
  setStartMinutes,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const startMinutesChange = (minute) => {
    setStartMinutes(minute);
    // onSelect(minute);
    setIsOpen(false);
  };
  return (
    <div className="dropdown-hour font-DMSans">
      <div onClick={toggleDropdown}>
        {startMinutes}
        {isOpen && (
          <div className="hour-options overflow-y-scroll h-[100px]">
            {minutes.map((minute, index) => (
              <div
                key={index}
                className=" hour-option hover:text-[#36aad9]"
                onClick={() => startMinutesChange(minute)}
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
