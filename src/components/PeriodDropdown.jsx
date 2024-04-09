import { useState } from 'react';
import './hourdropdown.css';
export default function PeriodDropdown({
  startHour,
  startPeriod,
  apm,
  setStartPeriod,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handlePeriodChange = (period) => {
    setStartPeriod(period);
    // onSelect(minute);
    setIsOpen(false);
  };
  return (
    <div className="dropdown-hour font-DMSans">
      <div onClick={toggleDropdown}>
        {startPeriod}
        {isOpen && (
          <div className="hour-options overflow-y-scroll h-[50px]">
            {apm.map((period, index) => (
              <div
                key={index}
                className=" hour-option hover:text-[#36aad9]"
                onClick={() => handlePeriodChange(period)}
              >
                {period}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
