import ProfileNav from './ProfileNav';
import ProfileDropdown from './ProfileDropdown';
// import Schedule from './Schedule';
import ImageSlider from './ImageSlider';
import CreateMeetingOptions from './CreateMeetingOptions';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Products from './Products';
import { ClipLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
export default function LoginSuccessful({
  schedule,
  showSchedule,
  profileDrop,
  showProfDrop,
  setProfileDrop,
  meetingLink,
  products,
  showProducts,
}) {
  const [options, setOptions] = useState(false);
  const showOptions = () => {
    setOptions(!options);
  };
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('userToken');
  const navigate = useNavigate();

  const Instant = async () => {
    setLoading(true);
    const hostAgentString = uuidv4();
    localStorage.setItem('hostAgent', hostAgentString);
    console.log('pppp', hostAgentString);

    // meetingLink();
    try {
      const response = await axios.post(
        'https://api-meet.tm-dev.xyz/api/v1/meeting/createinstant',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      const data = response;
      console.log(data);
      setLoading(false);
      localStorage.setItem('meeting', data?.data?.data);
      localStorage.setItem('videoId', data?.data?.referenceId);
      window.location.href = data?.data?.data;

      console.log(data);
    } catch (error) {
      setLoading(false);
      toast.error(error.response);
      console.log(error.response);
    }
  };

  return (
    <div>
      <div>
        <div>
          <ProfileNav
            showProfDrop={showProfDrop}
            profileDrop={profileDrop}
            setProfileDrop={setProfileDrop}
            showProducts={showProducts}
            products={products}
          />
        </div>
        <div className="flex bg-white items-center justify-between">
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
                  className="border border-[#c6c6c6] rounded-lg -mb-2 px-12 w-[405px] py-[9px] placeholder:text-[15px] placeholder:text-[#1F1F1F] placeholder:opacity-80 outline-none text-[15px]
              "
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
                  className="flex gap-2 items-center bg-[#36AAD9] rounded-lg text-white font-medium border-none outline-none px-4 py-[9px] text-[15px] relative"
                  onClick={showOptions}
                >
                  <img src="/video.svg" alt="" className="w-[20px] h-[20px]" />
                  Create Meeting
                </button>
                {options && (
                  <ul
                    className="font-inter text-[#454545] tracking-tight text-sm max-w-fit shadow-md border-opacity-10 absolute left-0 bg-white top-[43px] z-50
"
                  >
                    <li className="flex gap-[12px] items-center border border-[#c6c6c6] pl-[12px] pr-[35px] py-[10px] rounded-t-md hover:bg-[#36AAD9] hover:text-white group cursor-pointer">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 19"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="group-hover:fill-current"
                      >
                        <path
                          d="M9.49988 2C5.37488 2 1.99988 5.375 1.99988 9.5C1.99988 13.625 5.37488 17 9.49988 17C13.6249 17 16.9999 13.625 16.9999 9.5C16.9999 5.375 13.6249 2 9.49988 2ZM9.49988 15.5C6.19238 15.5 3.49988 12.8075 3.49988 9.5C3.49988 6.1925 6.19238 3.5 9.49988 3.5C12.8074 3.5 15.4999 6.1925 15.4999 9.5C15.4999 12.8075 12.8074 15.5 9.49988 15.5ZM9.87488 5.75H8.74988V10.25L12.6499 12.65L13.2499 11.675L9.87488 9.65V5.75Z"
                          fill="#667085"
                        />
                      </svg>
                      Create link for meeting
                    </li>
                    <li
                      className="flex gap-[12px] items-center border-x border-b border-[#c6c6c6] pl-[12px] pr-[35px] py-[10px] rounded-b-md hover:bg-[#36AAD9] hover:text-white group cursor-pointer"
                      onClick={Instant}
                    >
                      <svg
                        width="20"
                        height="17"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:fill-current"
                      >
                        <path
                          d="M4.67887 2.77687C4.54301 2.86473 4.44651 3.00185 4.40967 3.15939C4.37283 3.31693 4.39852 3.48261 4.48133 3.62161C4.56414 3.7606 4.69763 3.86206 4.85371 3.90465C5.00979 3.94725 5.17631 3.92766 5.31825 3.85L5.32387 3.84687L5.36137 3.82625C5.3995 3.80687 5.46137 3.77625 5.54887 3.7375C5.72387 3.66062 6.00075 3.55313 6.38262 3.44375C7.147 3.22688 8.33887 3 10.0001 3C11.6614 3 12.8532 3.22625 13.6176 3.445C14.0001 3.55375 14.2764 3.66125 14.4514 3.73875C14.5277 3.77211 14.6028 3.80838 14.6764 3.8475L14.6826 3.85063C14.8248 3.93109 14.9928 3.95269 15.1507 3.91079C15.3087 3.86889 15.4439 3.76683 15.5275 3.62646C15.6111 3.48609 15.6364 3.31857 15.5979 3.15978C15.5595 3.00098 15.4605 2.86354 15.322 2.77687L15.3207 2.77562H15.3195L15.3164 2.77375L15.3089 2.76875C15.2776 2.75091 15.2459 2.73382 15.2139 2.7175C15.1285 2.67349 15.0418 2.63222 14.9539 2.59375C14.631 2.45485 14.2992 2.33751 13.9607 2.2425C13.0845 1.9925 11.7764 1.75 10.0001 1.75C8.22387 1.75 6.91575 1.9925 6.0395 2.2425C5.602 2.3675 5.272 2.495 5.047 2.59375C4.92594 2.64682 4.80728 2.70521 4.69137 2.76875L4.68387 2.77375L4.68075 2.775L4.6795 2.77562L4.67887 2.77687ZM4.68762 5.1875C4.10746 5.1875 3.55106 5.41797 3.14083 5.8282C2.73059 6.23844 2.50012 6.79484 2.50012 7.375V13.625C2.50012 14.2052 2.73059 14.7616 3.14083 15.1718C3.55106 15.582 4.10746 15.8125 4.68762 15.8125H10.9376C11.5178 15.8125 12.0742 15.582 12.4844 15.1718C12.8947 14.7616 13.1251 14.2052 13.1251 13.625V12.3575L16.0857 14.1088C16.2281 14.1928 16.3901 14.2378 16.5553 14.2391C16.7206 14.2404 16.8833 14.1979 17.0269 14.1161C17.1705 14.0342 17.2899 13.9158 17.373 13.773C17.4561 13.6301 17.5 13.4678 17.5001 13.3025V7.69625C17.5002 7.53688 17.4596 7.38014 17.3822 7.24081C17.3049 7.10149 17.1932 6.98418 17.0579 6.89998C16.9226 6.81578 16.7681 6.76747 16.6089 6.7596C16.4498 6.75172 16.2912 6.78456 16.1482 6.855L13.1251 8.34563V7.375C13.1251 6.79484 12.8947 6.23844 12.4844 5.8282C12.0742 5.41797 11.5178 5.1875 10.9376 5.1875H4.68762ZM13.1251 9.73875L16.2501 8.19875V12.7544L13.1251 10.905V9.73875ZM3.75012 7.375C3.75012 7.12636 3.84889 6.8879 4.02471 6.71209C4.20052 6.53627 4.43898 6.4375 4.68762 6.4375H10.9376C11.1863 6.4375 11.4247 6.53627 11.6005 6.71209C11.7764 6.8879 11.8751 7.12636 11.8751 7.375V13.625C11.8751 13.8736 11.7764 14.1121 11.6005 14.2879C11.4247 14.4637 11.1863 14.5625 10.9376 14.5625H4.68762C4.43898 14.5625 4.20052 14.4637 4.02471 14.2879C3.84889 14.1121 3.75012 13.8736 3.75012 13.625V7.375ZM4.4645 17.3656C4.42217 17.436 4.39414 17.5141 4.38201 17.5953C4.36987 17.6766 4.37388 17.7594 4.39379 17.8391C4.4137 17.9188 4.44912 17.9938 4.49804 18.0598C4.54696 18.1258 4.60841 18.1815 4.67887 18.2237L4.68075 18.225L4.68387 18.2269L4.69137 18.2306C4.72241 18.2491 4.75409 18.2664 4.78637 18.2825C4.84762 18.3144 4.93387 18.3569 5.047 18.4062C5.272 18.505 5.60137 18.6319 6.0395 18.7575C6.91575 19.0075 8.22387 19.25 10.0001 19.25C11.7764 19.25 13.0845 19.0075 13.9607 18.7575C14.3989 18.6325 14.7282 18.505 14.9539 18.4062C15.0671 18.3567 15.1783 18.3025 15.287 18.2437L15.3089 18.2313L15.3164 18.2262L15.3195 18.225L15.3207 18.2237H15.322C15.4645 18.1389 15.5674 18.0009 15.6081 17.8401C15.6489 17.6794 15.6241 17.509 15.5392 17.3666C15.4543 17.2241 15.3163 17.1212 15.1556 17.0804C14.9948 17.0397 14.8245 17.0645 14.682 17.1494L14.677 17.1525C14.6032 17.1918 14.528 17.2283 14.4514 17.2619C14.2764 17.3387 14.0001 17.4462 13.6176 17.5556C12.8532 17.7738 11.6614 18 10.0001 18C8.33887 18 7.147 17.7738 6.38262 17.555C6.09865 17.4758 5.82032 17.3777 5.5495 17.2613C5.47292 17.2279 5.39766 17.1916 5.32387 17.1525L5.31825 17.1494C5.17621 17.0654 5.00675 17.0411 4.84681 17.0816C4.68688 17.1221 4.54945 17.2242 4.4645 17.3656Z"
                          fill="#667085"
                        />
                      </svg>
                      {loading ? (
                        <ClipLoader
                          color="#36D7B7"
                          loading={loading}
                          size={16}
                          className="flex justify-center"
                        />
                      ) : (
                        'Start a meeting now'
                      )}
                    </li>
                  </ul>
                )}

                <Link to="/schedule">
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
                  </button>{' '}
                </Link>
              </div>
              {/* <CreateMeetingOptions
                options={options}
                showOptions={showOptions}
                setOptions={setOptions}
                showLogin={showLogin}
                closeLogin={closeLogin}
                closeOptions={closeOptions}
              /> */}
            </div>
          </div>
          <div>
            <ImageSlider />
          </div>
        </div>

        {/* <Schedule schedule={schedule} showSchedule={showSchedule} /> */}
        <ProfileDropdown
          profileDrop={profileDrop}
          showProfDrop={showProfDrop}
          setProfileDrop={setProfileDrop}
        />
      </div>
    </div>
  );
}
