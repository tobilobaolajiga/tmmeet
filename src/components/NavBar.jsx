import { useState } from 'react';
import CreateAccount from './CreateAccount';
import Login from './Login';
import Products from './Products';
export default function NavBar({
  showLogin,
  closeLogin,
  login,
  closeOptions,
  setLogin,
  userEmail,
  setUserEmail,
  userPassword,
  setUserPassword,
  otp,
  setOTP,
  showOtp,
  sendOTP,
  resendOTP,
  closeCreate,
  showCreateAccount,
  newAccount,
  setNewAccount,
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
  inputOne,
  inputTwo,
  inputThree,
  inputFour,
  setInputOne,
  setInputTwo,
  setInputThree,
  setInputFour,
  loading,
  isLoading,
  setIsLoading,
  products,
  showProducts,
}) {
  return (
    <div>
      <div className=" flex justify-between items-center px-[38px] py-[12px] font-DMSans border-b">
        <div>
          <img src="/TM30.svg" alt="" className="w-[120px] h-[34px]" />
        </div>
        <div className="flex items-center gap-[31px] pr-[20px]">
          <img
            src="/fe_app-menu.svg"
            alt=""
            className="w-[28px] h-[28px] cursor-pointer"
            onClick={showProducts}
          />
          <p
            className="font-semibold text-sm tracking-tighter cursor-pointer"
            onClick={showLogin}
          >
            Sign In
          </p>
          <button
            className="bg-[#36AAD9] px-[12px] pt-[11px] pb-[9px] text-[13px] tracking-normal text-white rounded-lg outline-none border-none cursor-pointer"
            onClick={showCreateAccount}
          >
            Create Account
          </button>
        </div>
      </div>

      <Login
        showLogin={showLogin}
        closeLogin={closeLogin}
        login={login}
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
        setNewAccount={setNewAccount}
        closeCreate={closeCreate}
        setLogin={setLogin}
        verifyOTP={verifyOTP}
        inputOne={inputOne}
        inputTwo={inputTwo}
        inputThree={inputThree}
        inputFour={inputFour}
        setInputOne={setInputOne}
        setInputTwo={setInputTwo}
        setInputThree={setInputThree}
        setInputFour={setInputFour}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Products products={products} showProducts={showProducts} />
      <CreateAccount
        newAccount={newAccount}
        showCreateAccount={showCreateAccount}
        showLogin={showLogin}
        setNewAccount={setNewAccount}
        otp={otp}
        setOTP={setOTP}
        showOtp={showOtp}
        sendOTP={sendOTP}
        resendOTP={resendOTP}
        closeCreate={closeCreate}
        name={name}
        setName={setName}
        lastname={lastname}
        setLast={setLast}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        pwd={pwd}
        setPwd={setPwd}
        verifyOTP={verifyOTP}
        inputOne={inputOne}
        inputTwo={inputTwo}
        inputThree={inputThree}
        inputFour={inputFour}
        setInputOne={setInputOne}
        setInputTwo={setInputTwo}
        setInputThree={setInputThree}
        setInputFour={setInputFour}
        loading={loading}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}
