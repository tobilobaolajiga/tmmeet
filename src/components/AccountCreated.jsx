import { useState } from 'react';
import LoginSuccessful from './LoginSuccessful';
import { Link } from 'react-router-dom';
export default function AccountCreated({ accountSuccess, showLogin }) {
  // const goToProfile = () => {
  //   window.location.href = '/login';
  //   setLogin(true);
  // };
  return (
    <div>
      {accountSuccess && (
        <div className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center ">
          <div className="bg-white m-auto rounded-2xl w-fit h-fit font-inter pb-4">
            <div className="flex flex-col items-center py-[20px] ">
              <img src="Animation.gif" alt="" />
              <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
                You're good to go..
              </p>
            </div>
            {/* <Link to="/login"> */}
            <div className="px-8 pb-8 pt-4">
              <button
                className="bg-[#36AAD9] text-white w-full py-[9px] rounded-md mt-[14px] text-[10px]"
                onClick={showLogin}
              >
                Continue
              </button>
            </div>
            {/* </Link> */}
          </div>
        </div>
      )}
      {/* <LoginSuccessful loginProfile={loginProfile} showProfile={showProfile} /> */}
    </div>
  );
}
