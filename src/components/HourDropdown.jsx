import { useState } from 'react';
import './hourdropdown.css';
export default function HourDropdown({
  startHour,
  setStartPeriod,
  onSelect,
  hours,
  setStartHour,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const startHourChange = (hour) => {
    setStartHour(hour);
    // onSelect(hour);
    setIsOpen(false);
    hour < 13 ? setStartPeriod('AM') : setStartPeriod('PM');
  };

  return (
    <div className="dropdown-hour font-DMSans">
      <div onClick={toggleDropdown}>
        {startHour}
        {isOpen && (
          <div className="hour-options overflow-y-scroll h-[100px]">
            {hours.map((hour, index) => (
              <div
                key={index}
                className=" hour-option hover:text-[#36aad9]"
                onClick={() => startHourChange(hour)}
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
