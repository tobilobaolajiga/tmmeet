import ImageSlider from './ImageSlider';
import CreateMeetingOptions from './CreateMeetingOptions';

export default function Hero({
  showLogin,
  closeLogin,
  showOptions,
  options,
  setOptions,
  login,
  closeOptions,
  showCreateAccount,
  userEmail,
  setUserEmail,
  userPassword,
  setUserPassword,
  otp,
  setOTP,
  showOtp,
  resendOTP,
  df,
  setId,
  setNewAccount,
  closeCreate,
  setLogin,
  verifyOTP,
  meetingLink,
}) {
  return (
    <div className="flex bg-white items-center justify-between ">
      <div className="px-[55px] py-[160px]">
        <div className="flex flex-col gap-6 font-DMSans basis-[1000px]">
          <div className=" text-[39px] font-bold">
            <p className="text-[#36AAD9]">Connect, Collaborate, Succeed</p>
            <p className="-mt-[5px]">Together</p>
          </div>
          <p className="text-[16px] text-[#667185] mb-2 mt-[4px] font-normal leading-tight ">
            TMmeet makes it easier for us to conduct meetings and <br />
            video calls from various places, anytime, anywhere.
          </p>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter a link"
              className="border border-[#c6c6c6] rounded-lg -mb-2 px-12 w-[405px] py-[9px] placeholder:text-[15px] placeholder:text-[#1F1F1F] placeholder:opacity-80
              "
              onClick={showLogin}
            />{' '}
            <img
              src="/link.svg"
              alt=""
              className="relative right-[385px] w-[14x] h-[16px] top-[5px]"
            />{' '}
            <button className="text-white bg-[#36AAD9] bg-opacity-50 py-[7px] px-[7px] text-[12px] rounded relative right-[104px] top-[4px]">
              Join Meeting
            </button>
          </div>
          <div className="flex gap-[12px] relative">
            <button
              className="flex gap-2 items-center bg-[#36AAD9] rounded-lg text-white font-medium border-none outline-none px-4 py-[9px] text-[15px]"
              onClick={showOptions}
            >
              <img src="/video.svg" alt="" className="w-[20px] h-[20px]" />
              Create Meeting
            </button>
            <CreateMeetingOptions
              options={options}
              showOptions={showOptions}
              setOptions={setOptions}
              showLogin={showLogin}
              closeLogin={closeLogin}
              closeOptions={closeOptions}
              showCreateAccount={showCreateAccount}
              userEmail={userEmail}
              setUserEmail={setUserEmail}
              userPassword={userPassword}
              setUserPassword={setUserPassword}
              otp={otp}
              setOTP={setOTP}
              showOtp={showOtp}
              resendOTP={resendOTP}
              df={df}
              setId={setId}
              setNewAccount={setNewAccount}
              closeCreate={closeCreate}
              setLogin={setLogin}
              verifyOTP={verifyOTP}
              meetingLink={meetingLink}
            />
            <button
              className="text-[#36AAD9] text-[15px] flex gap-2 items-center font-medium bg-white border-[#36AAD9] border rounded-lg outline-none px-4 py-[9px]"
              onClick={showLogin}
            >
              <img src="/calendar.svg" alt="" className="w-[20px] h-[18px]" />
              Schedule your Meeting
            </button>
          </div>
        </div>
      </div>
      <div>
        <ImageSlider />
      </div>
    </div>
  );
}
