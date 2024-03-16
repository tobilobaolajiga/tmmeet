import { useState } from 'react';
import LoginSuccessful from './LoginSuccessful';
export default function Login({
  login,
  closeLogin,
  showLogin,
  closeOptions,
  showCreateAccount,
}) {
  const [profile, setProfile] = useState(false);
  return (
    <div>
      {login && (
        <div
          className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center"
          onClick={() => {
            closeOptions(), closeLogin();
          }}
        >
          <div className="bg-white m-auto w-3/12 h-3/5 rounded-2xl font-inter">
            <div className="flex flex-col items-center pt-[24px] border-b pb-[20px]">
              <img src="/TM30.svg" alt="" width={60} />
              <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
                Login to your account{' '}
              </p>
              <p className="text-[#667085] text-[10px] tracking-tight">
                Use your email to continue using TMmeet
              </p>
            </div>
            <div className="px-8 pb-8 pt-4">
              <form action="" className="relative">
                <label
                  htmlFor=""
                  className="text-[10px] font-medium text-[#344054]"
                >
                  Email address
                  <span
                    className="text-[#36AAD9]
"
                  >
                    *
                  </span>
                </label>{' '}
                <br />
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="border w-full rounded-md px-6 py-[4px] mb-[6px] mt-[4px] placeholder:text-[9px]  placeholder:text-[#667085]"
                />
                <img
                  src="/mail.svg"
                  alt=""
                  width={12}
                  className="absolute top-[42px] left-[9px]"
                />
                <label
                  htmlFor=""
                  className="text-[10px] font-medium text-[#344054]"
                >
                  Password
                  <span
                    className="text-[#36AAD9]
"
                  >
                    *
                  </span>
                </label>{' '}
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="border w-full rounded-md px-6 py-[4px] mb-[6px] mt-[4px] placeholder:text-[9px]  placeholder:text-[#667085]"
                />
                <img
                  src="/password.svg"
                  alt=""
                  width={12}
                  className="absolute bottom-[16px] left-[9px]"
                />
              </form>
              <button className="bg-[#36AAD9] text-white w-full py-[8px] rounded-md mt-2 text-[10px]">
                Continue
              </button>
              <p className="text-center pt-4 text-[#667085] text-[9px]">
                New to TMmeet?{' '}
                <span
                  className="text-[#36AAD9] underline font-semibold"
                  onClick={showCreateAccount}
                >
                  Create account
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      {/* <LoginSuccessful /> */}
    </div>
  );
}
