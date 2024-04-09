import { useEffect } from 'react';

export default function ShareLinkModal({ shareLink, showShare, setShareLink }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShareLink(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {shareLink && (
        <div className="absolute bg-white rounded-md py-4 px-4 bottom-[80px] left-12">
          <div className="flex justify-between pb-2 border-b">
            <p className="font-inter text-[12px] font-semibold">
              Your meeting is in progress
            </p>
            <img
              src="/cross.svg"
              alt=""
              width={12}
              onClick={showShare}
              className="cursor-pointer"
            />
          </div>
          <div>
            <p className="text-[11px] pt-2 text-[#667085] font-normal font-DMSans">
              Send the link to invite people to join meeting
            </p>
            <input
              type="text"
              placeholder="Meet.tm30.com/hbnj-njsa-khsd"
              className="border px-2 py-2 mt-2 rounded-lg placeholder:text-[10px] w-full outline-none text-[10px] placeholder-center bg-[#f4f4f4]"
            />
            <img
              src="/tabler_copy.svg"
              alt=""
              className="absolute right-6 bottom-[26px]"
              width={12}
            />
          </div>
        </div>
      )}
    </div>
  );
}
