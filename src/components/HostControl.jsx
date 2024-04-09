import { useState } from 'react';

export default function HostControl({
  hostControl,
  showHostControl,
  options,
  showOptions,
}) {
  return (
    <div>
      {hostControl && (
        <div className="w-1/5 absolute h-5/6 bg-white left-[40px] top-[40px] rounded-md px-2 py-2">
          <p className="border-b flex justify-center font-inter font-semibold text-[#5F5F67] text-[12px] py-2 pb-2">
            Host Control
          </p>
          <p className="border-b py-2 text-[#1A1A1A] font-inter font-semibold text-[11px]">
            Meeting Control
          </p>
          <div className="py-4">
            <p className="font-DMSans text-[10px] font-semibold text-[#667185] ">
              Host Management
            </p>
            <p className="text-[9px] font-inter text-[#5F5F67] font-normal">
              Enable and Disable what participants can do in the meeting
            </p>
          </div>
          <p className="text-[11px] text-[#667185] font-inter font-normal pb-2">
            Allow Participants
          </p>
          <ul className="font-DMSans text-[10px] pb-4">
            <li className="flex justify-between pb-[10px] ">
              Share their screen <img src="/switch.svg" alt="" width={20} />
            </li>
            <li className="flex justify-between pb-[10px]">
              Send message <img src="/switch.svg" alt="" width={20} />
            </li>
            <li className="flex justify-between pb-[10px]">
              Send reactions <img src="/switch.svg" alt="" width={20} />
            </li>
            <li className="flex justify-between pb-[10px]">
              Turn on their microphone{' '}
              <img src="/switch.svg" alt="" width={20} />
            </li>
            <li className="flex justify-between pb-[10px]">
              Turn on their video <img src="/switch.svg" alt="" width={20} />
            </li>
          </ul>
          <p className="border-b border-t py-2 text-[#1A1A1A] font-inter font-semibold text-[10px]">
            Meeting Access
          </p>
          <p className="py-2 text-[10px] text-[#667185] font-bold font-DMSans">
            Meeting Access Type
          </p>
          <div>
            <p className="flex justify-between text-[11px] pb-2 text-[#1a1a1a]">
              <span className="opacity-80">Open</span>{' '}
              <img src="/switch.svg" alt="" width={20} />
            </p>
            <p className="text-[9px] pb-2 text-[#5F5F67]">
              No one has to ask to join the meeting
            </p>
          </div>
          <div>
            <p className="flex justify-between text-[11px] pb-2 text-[#1a1a1a] ">
              <span className="opacity-80">Ask to join</span>{' '}
              <img src="/switch.svg" alt="" width={20} />
            </p>
            <p className="text-[9px] pb-4 text-[#5F5F67] border-b">
              Everyone has to ask to join the meeting
            </p>
          </div>
          <button className="w-full text-center text-white mt-4 rounded-md text-[10px] py-2 border bg-[#36aad9]">
            SAVE CHANGES
          </button>
        </div>
      )}
    </div>
  );
}
