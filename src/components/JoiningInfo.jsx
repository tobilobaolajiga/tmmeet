import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function JoiningInfo({ joinInfo, showJoinInfo, closeJoinInfo }) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(localStorage.getItem('meetingId'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success('Copied!');
  };
  return (
    <div>
      {joinInfo && (
        <div className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center ">
          <div className="bg-white m-auto w-fit rounded-2xl h-fit pb-6">
            <div className="px-6 py-[16px] flex justify-center relative border-b border-[#EAECF0]">
              <p className="font-inter font-semibold text-[16px] tracking-tight ">
                Joining information{' '}
              </p>
              <img
                width={16}
                src="/cross.svg"
                alt=""
                className="absolute right-[14px] top-[12px] cursor-pointer"
                onClick={closeJoinInfo}
              />
            </div>

            <div className="px-[20px] pt-[14px] pb-[12px] border-b ">
              <p className="text-[#667085] font-inter text-[10px] leading-tight opacity-95 font-[410px] text-wrap">
                Send the link to invite people to join meeting.
                <br /> Make sure you save the link for future purpose.
              </p>
              {/* <div className="relative ">
                <input
                  type="text"
                  className="w-full border border-[#D0D5DD] bg-[#F4F4F4] py-[2px] px-[3px] my-[12px] rounded-lg shadow-sm"
                />
                <p className="absolute text-[8px] text-[#667085] left-2 bottom-[20px] font-inter tracking-tight w-[200px] overflow-x-clip text-nowrap  ">
                  <span className="">{localStorage.getItem('meetingId')}</span>
                  <img
                    width={14}
                    src="/tabler_copy.svg"
                    alt=""
                    className="absolute bottom-[4px] right-0"
                    onClick={copyToClipboard}
                  />
                </p>
              </div> */}
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-[#D0D5DD] bg-[#F4F4F4] py-[2px] px-[3px] my-[4px] rounded-lg shadow-sm "
                />
                <div className="absolute text-[9px]  text-[#667085] left-2 bottom-[12px] font-inter tracking-tight text-nowrap">
                  <p className="w-[190px] overflow-x-clip">
                    <span>{localStorage.getItem('meetingId')}</span>
                  </p>
                  <img
                    width={14}
                    src="/tabler_copy.svg"
                    alt=""
                    className="absolute bottom-[1px] -right-[6px]"
                    onClick={copyToClipboard}
                  />
                </div>
              </div>
            </div>

            <div className="px-[20px] pt-[12px] ">
              <p className="text-[#667085] font-inter text-[10px] leading-tight tracking-tight font-normal opacity-95 text-wrap">
                To invite people to join meeting, you can
                <span className="text-[#36AAD9]"> share </span> <br /> the link
                via TMmail
              </p>
              <div className="relative ">
                <input
                  type="text"
                  placeholder="TMmail"
                  className="w-full border border-[#D0D5DD] bg-white px-4 py-[2px] my-[11px] rounded-lg placeholder:text-[#667085] placeholder:opacity-50 placeholder:text-[9px] shadow-sm placeholder:tracking-tighter outline-none text-[9px]"
                />

                <button className="bg-[#36AAD9] text-white rounded px-[9px] py-[3px] text-[9px] absolute bottom-[16px] right-[10px]">
                  Invite
                </button>
              </div>
            </div>

            <div className="px-[20px] py-[2px] font-inter">
              <ul className="flex flex-col justify-center gap-2 border-b border-[#D0D5DD]/30 pb-4 ">
                <li className="flex justify-between items-center">
                  <p className="flex text-[9px] text-[#667085] items-center gap-2 font-medium tracking-tight">
                    {' '}
                    <img src="/world.svg" alt="" width={17} />
                    Anyone with the link
                  </p>
                  <span className="text-[9px] text-[#1A1A1A] font-semibold tracking-tight">
                    can join
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <p className="flex items-center gap-2 text-[9px] font-semibold tracking-tight">
                    <img src="/M.svg" alt="" width={20} />
                    Mayowa Peters{' '}
                    <span className="text-[#667085] text-[9px] opacity-80 -ml-[7px]">
                      (you)
                    </span>{' '}
                  </p>
                  <span className="text-[9px] text-[#1A1A1A] font-semibold tracking-tight">
                    Host
                  </span>
                </li>
              </ul>
            </div>

            <div className="px-[20px] py-[2px] font-inter">
              <p className="text-[9px] font-medium py-[7px] tracking-tighter">
                Suggestion
              </p>
              <ul className="flex flex-col justify-center gap-2">
                <li className="flex justify-between items-center">
                  <p className="flex items-center gap-2 text-[9px] font-semibold tracking-tight">
                    <img src="/A.svg" alt="" width={20} />
                    Adekunle Samson{' '}
                  </p>
                  <span className="text-[9px] text-[#1A1A1A] font-semibold tracking-tight">
                    can join
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <p className="flex items-center gap-2 text-[9px] font-semibold tracking-tight">
                    <img src="/T.svg" alt="" width={20} />
                    Tomiwa Williams{' '}
                  </p>
                  <span className="text-[9px] text-[#1A1A1A] font-semibold tracking-tight">
                    can join
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
{
  /* <div className="absolute text-[9px]  text-[#667085] left-2 bottom-[12px] font-inter tracking-tight text-nowrap">
  <p className="w-[220px] overflow-x-clip">
    {`${window.location.origin}/check/${meetingDetails.meetingId}`}
    <img
      width={16}
      src="/tabler_copy.svg"
      alt=""
      className="absolute -top-[2px] -right-[40px]"
      onClick={copyToClipboard}
    />
  </p>
</div>; */
}
