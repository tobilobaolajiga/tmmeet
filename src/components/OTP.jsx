import { useState } from 'react';
import CreatePassword from './createPassword';

export default function OTP({ otp, showOtp }) {
  return (
    <div>
      <div>
        {otp && (
          <div
            className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center "
            onClick={showOtp}
          >
            <div className="bg-white m-auto rounded-2xl w-3/12 h-3/6 font-inter">
              <div className="flex flex-col items-center py-[20px] border-b">
                <img src="/TM30.svg" alt="" width={60} className="mt-[12px]" />
                <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
                  Request Code{' '}
                </p>
                <p className="text-[#667085] text-[10px] tracking-tight">
                  We sent a code to{' '}
                  <span className="font-semibold">Mayowapeters@gmail.com</span>
                </p>
              </div>
              <div className="px-8 pb-8 pt-4">
                <ul className="flex gap-4 items-center">
                  <li>
                    <img src="/box.svg" alt="" width={77} />
                  </li>
                  <li>
                    <img src="/box.svg" alt="" width={77} />
                  </li>
                  <li>
                    <img src="/box.svg" alt="" width={77} />
                  </li>
                  <li>
                    <img src="/box.svg" alt="" width={77} />
                  </li>
                </ul>
                <button
                  className="bg-[#36AAD9] text-white w-full py-[8px] rounded-md mt-[14px] text-[10px]"
                  onClick={passwordModal}
                >
                  Continue
                </button>
                <p className="text-center  text-[#667085] text-[10px] pt-[12px]">
                  Didn't receive the code?{' '}
                  <span className="text-[#36AAD9] underline font-semibold">
                    Click to resend code
                  </span>
                </p>
                <p className=" text-[#667085] text-[9px] opacity-60 flex gap-4 items-center justify-center pt-[10px]">
                  <img src="/arrowLef.svg" alt="" width={12} />
                  Back to create account
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
