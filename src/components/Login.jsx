import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import LoginSuccessful from './LoginSuccessful';
import OTP from './OTP';
import toast from 'react-hot-toast';

export default function Login({
  login,
  closeLogin,
  showLogin,
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
  setNewAccount,
  closeCreate,
  setLogin,
  email,
}) {
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const SignIn = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api-meet.tm-dev.xyz/api/v1/auth/login',
        {
          email: userEmail,
          password: userPassword,
        }
      );
      const data = response;
      console.log(data?.data?.data?.token?.refreshToken);
      localStorage.setItem('userToken', data?.data?.data?.token?.refreshToken);

      setLogin(false);
      setLoading(false);
      navigate('/login');
      console.log(data);
      console.log(localStorage.getItem('userData'));
      console.log(localStorage.getItem('userToken'));
      console.log(data?.data?.data?.token?.refreshToken);
      try {
        const token = localStorage.getItem('userToken');
        const response = await axios.get(
          'https://api-meet.tm-dev.xyz/api/v1/profile/me',

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response?.data?.data?.user);
        localStorage.setItem(
          'userData',
          JSON.stringify(response?.data?.data?.user)
        );
        localStorage.setItem('userId', response?.data?.data?.user?.id);

        console.log(response);
      } catch (error) {
        toast.error(error.message);
      }
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
      const userNo = error?.response?.data?.data?.userId;
      setUserId(userNo);
      localStorage.setItem('userId', error?.response?.data?.data?.userId);
      if (error.response.data.message === 'please verify your account') {
        setLoading(false);
        setOTP(!otp);
        setLogin(!login);
      }
      console.log(error?.response?.data?.data?.userId);
      console.log(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        {login && (
          <div className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center ">
            <div className="bg-white m-auto w-fit h-fit rounded-2xl font-inter">
              <div className="flex flex-col items-center pt-[24px] border-b pb-[20px]">
                <div className="relative w-full flex justify-center items-center">
                  <img src="/TM30.svg" alt="" width={60} />{' '}
                  <img
                    src="/cross.svg"
                    alt=""
                    width={10}
                    className="absolute top-[4px] right-[25px]"
                    onClick={closeLogin}
                  />
                </div>

                <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
                  Login to your account{' '}
                </p>
                <p className="text-[#667085] text-[10px] tracking-tight">
                  {error ? error : 'Use your email to continue using TMmeet'}
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
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="border w-full rounded-md px-6 py-[8px] text-[11px] mb-[6px] mt-[4px] placeholder:text-[9px]  placeholder:text-[#667085] outline-none"
                  />
                  <img
                    src="/mail.svg"
                    alt=""
                    width={12}
                    className="absolute top-[39px] left-[9px]"
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
                    type="password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="border w-full rounded-md px-6 py-[8px] text-[11px] mb-[6px] mt-[4px] placeholder:text-[9px]  placeholder:text-[#667085] outline-none"
                  />
                  <img
                    src="/password.svg"
                    alt=""
                    width={12}
                    className="absolute bottom-[18px] left-[9px]"
                  />
                </form>
                <button
                  onClick={SignIn}
                  className="bg-[#36AAD9] text-white w-full py-[8px] rounded-md mt-2 text-[10px]"
                >
                  {loading ? (
                    <ClipLoader color="#36D7B7" loading={loading} size={16} />
                  ) : (
                    'Continue'
                  )}
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
        <OTP
          otp={otp}
          resendOTP={resendOTP}
          showOtp={showOtp}
          userId={userId}
          userEmail={userEmail}
          email={email}
          setNewaccount={setNewAccount}
          showCreateAccount={showCreateAccount}
          closeCreate={closeCreate}
          setOTP={setOTP}
        />
      </div>
    </div>
  );
}
