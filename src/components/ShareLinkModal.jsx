import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
export default function ShareLinkModal({
  shareLink,
  showShare,
  setShareLink,
  meetingCode,
  meetingLink,
}) {
  const [currentDate, setCurrentDate] = useState();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShareLink(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup function
  }, []);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://tmmeet.vercel.app/check/${meetingCode}`
    );
    setCopied(true);
    toast.success('Copied!');
    setTimeout(() => setCopied(false), 2000);
  };
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
            {/* <input
              type="text"
              placeholder="Meet.tm30.com/hbnj-njsa-khsd"
              className="border px-2 py-2 mt-2 rounded-lg placeholder:text-[10px] w-full outline-none text-[10px] placeholder-center bg-[#f4f4f4]"
            /> */}
            <p
              className="border px-2 pr-4 mr-4 py-2 mt-2 rounded-lg placeholder:text-[10px] outline-none text-[10px] 
            w-full bg-[#f4f4f4]"
            >
              {`https://tmmeet.vercel.app/check/${meetingCode}`}
            </p>
            <img
              onClick={copyToClipboard}
              src="/tabler_copy.svg"
              alt=""
              className="absolute right-6 bottom-[26px] cursor-pointer"
              width={12}
            />
          </div>
        </div>
      )}
    </div>
  );
}
