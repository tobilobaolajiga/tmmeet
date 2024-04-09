import { useEffect } from 'react';

export default function AdmitModal({
  displayName,
  admit,
  showAdmit,
  setAdmit,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAdmit(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {admit && (
        <div className="flex gap-4 bg-white items-center absolute left-12 top-[70px] py-4 px-4 rounded-md">
          <div>
            <p className="text-[12px] font-DMSans font-semibold text-black">
              Someone wants to join the meeting
            </p>
            <p className="text-[11px] text-[#667185] font-DMSans mt-[4px] ">
              Mayowa Peters
            </p>
          </div>
          <button className="text-white bg-[#36aad9] px-2 py-[6px] text-[12px] rounded font-DMSans">
            Admit
          </button>
          <img
            src="/cross.svg"
            alt=""
            width={15}
            onClick={showAdmit}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
