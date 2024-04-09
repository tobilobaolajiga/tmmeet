export default function RepeatDropdown() {
  return (
    <div>
      <ul
        onClick={(e) => console.log(e.target.value)}
        className="border text-[8px] absolute z-50 font-DMSans right-[100px] top-6 font-normal rounded-sm bg-white shadow-sm text-[#667085]"
      >
        <li
          value="Never"
          className="border-b pl-[7px] pr-[16px] py-[4px] hover:bg-[#36AAD9] hover:bg-opacity-10 hover:text-[#0A7EAE] hover:font-bold"
        >
          Never
        </li>
        <li className="border-b pl-[7px] pr-[16px] py-[4px] hover:bg-[#36AAD9] hover:bg-opacity-10 hover:text-[#0A7EAE] hover:font-bold">
          Every Day
        </li>
        <li className="border-b pl-[7px] pr-[16px] py-[4px] hover:bg-[#36AAD9] hover:bg-opacity-10 hover:text-[#0A7EAE] hover:font-bold">
          Every Week
        </li>
        <li className="border-b pl-[7px] pr-[16px] py-[4px] hover:bg-[#36AAD9] hover:bg-opacity-10 hover:text-[#0A7EAE] hover:font-bold">
          Every 2 Weeks
        </li>
        <li className="border-b pl-[7px] pr-[16px] py-[4px] hover:bg-[#36AAD9] hover:bg-opacity-10 hover:text-[#0A7EAE] hover:font-bold">
          Every Month
        </li>
        <li className="border-b pl-[7px] pr-[16px] py-[4px] hover:bg-[#36AAD9] hover:bg-opacity-10 hover:text-[#0A7EAE] hover:font-bold">
          Every Year
        </li>
      </ul>
    </div>
  );
}
