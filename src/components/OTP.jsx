import { useState, useRef } from 'react';
import axios from 'axios';
import AccountCreated from './AccountCreated';
import { ClipLoader } from 'react-spinners';
import toast from 'react-hot-toast';
export default function OTP({
  otp,
  resendOTP,
  showOtp,
  userId,
  email,
  setNewAccount,
  showCreateAccount,
  closeCreate,
  setOTP,
  userEmail,
  isLoading,
  setIsLoading,
  showLogin,
}) {
  const [loading, setLoading] = useState(false);
  // const userID = userId.current;
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');
  const [inputFour, setInputFour] = useState('');
  // const [error, setError] = useState('');

  const OTP = inputOne + inputTwo + inputThree + inputFour;
  const [error, setError] = useState('');
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();

  const focusNextInput = (e, currentRef, nextRef) => {
    if (currentRef.current) {
      nextRef.current.focus();
    }
  };

  const handleChange1 = (e, input1Ref, input2Ref) => {
    setInputOne(e.target.value);
    const { value } = e.target;
    if (value.length === e.target.maxLength) {
      focusNextInput(e, input1Ref, input2Ref);
    }
  };
  const handleChange2 = (e, input2Ref, input3Ref) => {
    setInputTwo(e.target.value);
    const { value } = e.target;
    if (value.length === e.target.maxLength) {
      focusNextInput(e, input2Ref, input3Ref);
    }
  };
  const handleChange3 = (e, input3Ref, input4Ref) => {
    setInputThree(e.target.value);
    const { value } = e.target;
    if (value.length === e.target.maxLength) {
      focusNextInput(e, input3Ref, input4Ref);
    }
  };
  const handleChange4 = (e, input4Ref) => {
    setInputFour(e.target.value);
    const { value } = e.target;
    if (value.length === e.target.maxLength) {
      focusNextInput(e, input3Ref, input4Ref);
    }
    handleBlurLastInput();
  };
  const handleBlurLastInput = () => {
    input4Ref.current.blur();
  };
  const closeOtp = () => {
    !showOtp();
    setNewAccount(false);
    // setNewAccount('');

    closeCreate();
  };

  // const showAccountSuccess = () => {
  //   setAccountSuccess(!accountSuccess);
  //   setOTP(false);
  //   verifyOTP();
  // };

  const newUserId = localStorage.getItem('userId');
  const Email = localStorage.getItem('email');
  const [accountSuccess, setAccountSuccess] = useState(false);
  const verifyOTP = async () => {
    setLoading(true);
    console.log(userId);
    try {
      const response = await axios.post(
        `https://api-meet.tm-dev.xyz/api/v1/auth/verify-otp/${newUserId}`,
        {
          otp: OTP,
        }
      );
      setLoading(false);
      const data = response;
      setAccountSuccess(!accountSuccess);
      setOTP(false);

      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <div>
        <div>
          {otp && (
            <div className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center ">
              <div className="bg-white m-auto rounded-2xl w-fit h-fit font-inter pb-4">
                <div className="flex flex-col items-center py-[20px] border-b">
                  <img
                    src="/TM30.svg"
                    alt=""
                    width={60}
                    className="mt-[12px]"
                  />
                  <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
                    Request Code{' '}
                  </p>
                  <p className="text-[#667085] text-[10px] tracking-tight">
                    {!error ? `We sent a code to ${Email || userEmail}` : error}
                  </p>
                </div>
                <div className="px-8 pb-8 pt-4">
                  <ul className="flex gap-[12px] items-center">
                    <li>
                      <input
                        type="text"
                        autoFocus
                        ref={input1Ref}
                        value={inputOne}
                        maxLength={1}
                        onChange={(e) => handleChange1(e, input1Ref, input2Ref)}
                        style={{ borderColor: inputOne ? '#36AAD9' : '' }}
                        className="w-[60px] h-[50px] border-2 rounded-sm focus:outline-[#36AAD9] text-center font-inter font-bold text-3xl"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        ref={input2Ref}
                        value={inputTwo}
                        maxLength={1}
                        onChange={(e) => handleChange2(e, input2Ref, input3Ref)}
                        style={{ borderColor: inputTwo ? '#36AAD9' : '' }}
                        className="w-[60px] h-[50px] border-2 rounded-sm focus:outline-[#36AAD9] text-center font-inter font-bold text-3xl"
                      />
                    </li>
                    <li>
                      <input
                        ref={input3Ref}
                        type="text"
                        value={inputThree}
                        maxLength={1}
                        onChange={(e) => handleChange3(e, input3Ref, input4Ref)}
                        style={{ borderColor: inputThree ? '#36AAD9' : '' }}
                        className="w-[60px] h-[50px] border-2 rounded-sm focus:outline-[#36AAD9] text-center font-inter font-bold text-3xl"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        ref={input4Ref}
                        value={inputFour}
                        maxLength={1}
                        onChange={(e) => handleChange4(e, input4Ref, null)}
                        style={{ borderColor: inputFour ? '#36AAD9' : '' }}
                        className="w-[60px] h-[50px] border-2 rounded-sm focus:outline-[#36AAD9] text-center font-inter font-bold text-3xl "
                      />
                    </li>
                  </ul>
                  <button
                    className="bg-[#36AAD9] text-white w-full py-[8px] rounded-md mt-[14px] text-[10px]"
                    onClick={verifyOTP}
                  >
                    {loading ? (
                      <ClipLoader color="#36D7B7" loading={loading} size={18} />
                    ) : (
                      'Continue'
                    )}
                  </button>
                  <p className="text-center  text-[#667085] text-[10px] pt-[12px]">
                    Didn't receive the code?{' '}
                    <span
                      className="text-[#36AAD9] underline font-semibold"
                      onClick={resendOTP}
                    >
                      {isLoading ? (
                        <ClipLoader
                          color="#36D7B7"
                          loading={isLoading}
                          size={16}
                        />
                      ) : (
                        'Click to resend code'
                      )}
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
          <AccountCreated
            accountSuccess={accountSuccess}
            showLogin={showLogin}
          />
        </div>
      </div>
    </div>
  );
}
