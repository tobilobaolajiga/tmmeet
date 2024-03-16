import ProfileNav from './ProfileNav';
import Schedule from './Schedule';
import ImageSlider from './ImageSlider';
import CreateMeetingOptions from './CreateMeetingOptions';
export default function LoginSuccessful({
  showLogin,
  closeLogin,
  showOptions,
  closeOptions,
  options,
  setOptions,
  login,
  schedule,
  showSchedule,
}) {
  return (
    <div>
      <div>
        <div>
          <ProfileNav />
        </div>
        <div className="flex bg-white">
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
              <div className="flex gap-[12px]">
                <button
                  className="flex gap-2 items-center bg-[#36AAD9] rounded-lg text-white font-medium border-none outline-none px-4 py-[9px] text-[15px] relative"
                  onClick={showOptions}
                >
                  <img src="/video.svg" alt="" className="w-[20px] h-[20px]" />
                  Create Meeting
                </button>
                <button
                  className="text-[#36AAD9] text-[15px] flex gap-2 items-center font-medium bg-white border-[#36AAD9] border rounded-lg outline-none px-4 py-[9px]"
                  onClick={showSchedule}
                >
                  <img
                    src="/calendar.svg"
                    alt=""
                    className="w-[20px] h-[18px]"
                  />
                  Schedule your Meeting
                </button>
              </div>
              <CreateMeetingOptions
                options={options}
                showOptions={showOptions}
                setOptions={setOptions}
                showLogin={showLogin}
                closeLogin={closeLogin}
                closeOptions={closeOptions}
              />
            </div>
          </div>
          <div>
            <ImageSlider />
          </div>
        </div>
      </div>
      <Schedule schedule={schedule} />
    </div>
  );
}
