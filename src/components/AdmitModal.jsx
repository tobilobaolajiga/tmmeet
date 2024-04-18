import { useEffect } from 'react';
import axios from 'axios';
export default function AdmitModal({
  displayName,

  guestRequest,
  admitGuest,
  closeAdmit,
}) {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setAdmit(true);
  //   }, 3000);
  //   return () => clearTimeout(timer);

  // }, []);
  const refId = localStorage.getItem('refId');
  const token = localStorage.getItem('userToken');

  return (
    <div>
      {guestRequest && (
        <div className="flex gap-4 bg-white items-center absolute left-12 top-[70px] py-4 px-4 rounded-md">
          <div>
            <p className="text-[12px] font-DMSans font-semibold text-black">
              {localStorage.getItem('admitMsg')}
            </p>
            <p className="text-[11px] text-[#667185] font-DMSans mt-[4px] ">
              {displayName}
            </p>
          </div>
          <button
            className="text-white bg-[#36aad9] px-2 py-[6px] text-[12px] rounded font-DMSans"
            onClick={admitGuest}
          >
            Admit
          </button>
          <img
            src="/cross.svg"
            alt=""
            width={15}
            className="cursor-pointer"
            onClick={closeAdmit}
          />
        </div>
      )}
    </div>
  );
}
