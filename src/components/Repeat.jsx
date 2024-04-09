import { useState } from 'react';

export default function Repeat({ repeatBtn, setRepeatBtn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const repeatChange = (e) => {
    console.log(e.target.innerText);
    setRepeatBtn(e.target.innerText);
    setIsOpen(false);
  };
  return (
    <div className="dropdown-hour font-DMSans">
      <div
        onClick={toggleDropdown}
        className="py-[2px] px-[4px] overflow-y-scroll "
      >
        <div className="flex gap-2 text-[9px] relative font-bold">
          {' '}
          {repeatBtn}
          <img src="/dropdown.svg" alt="" width={10} />
        </div>
        {isOpen && (
          <div className="absolute z-50 left-0 bg-white text-left text-[9px] shadow-md w-[60px] top-[20px]">
            <ul className="pl-[4px]">
              <li
                className=" hover:text-[#36aad9] pt-[4px]"
                onClick={repeatChange}
              >
                Never
              </li>
              <li
                onClick={repeatChange}
                className="py-[4px] hover:text-[#36aad9]"
              >
                Every Day
              </li>
              <li
                onClick={repeatChange}
                className="pb-[4px] hover:text-[#36aad9]"
              >
                Every Week
              </li>
              <li
                onClick={repeatChange}
                className="pb-[4px] hover:text-[#36aad9]"
              >
                Every 2 Weeks
              </li>
              <li
                onClick={repeatChange}
                className="pb-[4px] hover:text-[#36aad9]"
              >
                Every Month
              </li>
              <li
                onClick={repeatChange}
                className="pb-[4px] hover:text-[#36aad9]"
              >
                Every Year
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
