import { useState } from 'react';
import CreatePassword from './CreatePassword';
import toast from 'react-hot-toast';
export default function CreateAccount({
  newAccount,
  showCreateAccount,
  showLogin,
  setNewAccount,
  userId,
  setId,
  otp,
  setOTP,
  sendOTP,
  showOtp,
  closeCreate,
  resendOTP,
  resendOtp,
  name,
  setName,
  lastname,
  setLast,
  email,
  setEmail,
  password,
  setPassword,
  pwd,
  setPwd,
  verifyOTP,
  loading,
  isLoading,
  setIsLoading,
}) {
  const passwordModal = () => {
    setNewAccount(false);
    setPassword(!password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // !showEnterAll();
    passwordModal();
  };
  const [enterDetails, setEnterDetails] = useState(false);
  const showEnterAll = () => {
    toast.error('Enter all details!');
  };
  return (
    <div>
      <div>
        {newAccount && (
          <div className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center ">
            <div className="bg-white m-auto w-fit h-fit rounded-2xl font-inter">
              <div className="flex flex-col items-center pt-[20px] border-b pb-[20px]">
                <div className="relative w-full flex justify-center items-center">
                  <img src="/TM30.svg" alt="" width={60} />{' '}
                  <img
                    src="/cross.svg"
                    alt=""
                    width={10}
                    className="absolute top-[4px] right-[25px]"
                    onClick={closeCreate}
                  />
                </div>
                <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
                  Create a new account{' '}
                </p>

                <p className="text-[#667085] text-[11px] tracking-tight">
                  <img src={enterDetails ? '' : ''} alt="" />
                  {enterDetails
                    ? 'Enter all details!'
                    : 'Enter your details to register'}
                </p>
              </div>

              <div className="px-8 pb-8 pt-4">
                <form action="" className="relative" onSubmit={handleSubmit}>
                  <label
                    htmlFor=""
                    className="text-[10px] font-medium text-[#344054]"
                  >
                    First Name
                    <span
                      className="text-[#36AAD9]
"
                    >
                      *
                    </span>
                  </label>{' '}
                  <br />
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter your first name"
                    className="border w-full rounded-md px-8 py-[8px] text-[11px] mb-[6px] mt-[4px] placeholder:text-[9px]  placeholder:text-[#667085] outline-none  "
                  />
                  <img
                    src="/person.svg"
                    alt=""
                    width={11}
                    className="absolute top-[38px] left-[9px]"
                  />
                  <label
                    htmlFor=""
                    className="text-[10px] font-medium text-[#344054]"
                  >
                    Last Name
                    <span
                      className="text-[#36AAD9]
"
                    >
                      *
                    </span>
                  </label>{' '}
                  <br />
                  <input
                    required
                    value={lastname}
                    onChange={(e) => setLast(e.target.value)}
                    type="text"
                    placeholder="Enter your last name"
                    className="border w-full rounded-md px-8 py-[8px] text-[11px] mb-[6px] mt-[4px] placeholder:text-[9px]  placeholder:text-[#667085] outline-none"
                  />
                  <img
                    src="/person.svg"
                    alt=""
                    width={11}
                    className="absolute bottom-[86px] left-[9px]"
                  />
                  <label
                    htmlFor=""
                    className="text-[10px] font-medium text-[#344054]"
                  >
                    Email Address
                    <span
                      className="text-[#36AAD9]
"
                    >
                      *
                    </span>
                  </label>{' '}
                  <br />
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Enter your email address"
                    className="border w-full rounded-md px-8 py-[8px] text-[11px] mb-[6px] mt-[4px] placeholder:text-[9px]  placeholder:text-[#667085] outline-none"
                  />
                  <img
                    src="/mail.svg"
                    alt=""
                    width={13}
                    className="absolute bottom-[17px] left-[9px]"
                  />
                </form>
                <button
                  className="bg-[#36AAD9] text-white w-full py-[8px] rounded-md mt-2 text-[10px] outline-none"
                  onClick={
                    name && lastname && email ? handleSubmit : showEnterAll
                  }
                >
                  Continue
                </button>

                <p className="text-center pt-2 text-[#667085] text-[10px]">
                  Already have an account?{' '}
                  <span
                    className="text-[#36AAD9] underline font-semibold"
                    onClick={showLogin}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
        <CreatePassword
          password={password}
          passwordModal={passwordModal}
          showCreateAccount={showCreateAccount}
          email={email}
          name={name}
          setNewAccount={setNewAccount}
          setPassword={setPassword}
          closeCreate={closeCreate}
          userId={userId}
          setId={setId}
          otp={otp}
          setOTP={setOTP}
          showOtp={showOtp}
          sendOTP={sendOTP}
          resendOTP={resendOTP}
          pwd={pwd}
          setPwd={setPwd}
          verifyOTP={verifyOTP}
          loading={loading}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          showLogin={showLogin}
        />
      </div>
    </div>
  );
}
