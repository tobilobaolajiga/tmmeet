import { useState } from 'react';
import './hourdropdown.css';
export default function EndHourDropdown({
  endHour,
  hours,
  setEndHour,
  setEndPeriod,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const endHourChange = (hour) => {
    setEndHour(hour);
    hour < 13 ? setEndPeriod('AM') : setEndPeriod('PM');
    setIsOpen(false);
  };
  return (
    <div className="dropdown-hour font-DMSans">
      <div onClick={toggleDropdown}>
        {endHour}
        {isOpen && (
          <div className="hour-options overflow-y-scroll h-[100px]">
            {hours.map((hour, index) => (
              <div
                key={index}
                className=" hour-option hover:text-[#36aad9]"
                onClick={() => endHourChange(hour)}
              >
                {hour}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
