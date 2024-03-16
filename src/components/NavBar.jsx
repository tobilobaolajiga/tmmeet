import { useState } from 'react';
import CreateAccount from './CreateAccount';
import Login from './Login';
export default function NavBar({
  showLogin,
  closeLogin,
  login,
  closeOptions,
  setLogin,
  passwordModal,
}) {
  const [newAccount, setNewAccount] = useState(false);

  const showCreateAccount = () => {
    setNewAccount(!newAccount);
    setLogin(!login);
    !passwordModal();
  };

  return (
    <div>
      <div className=" flex justify-between items-center px-[38px] py-[12px] font-DMSans border-b">
        <div>
          <img src="/TM30.svg" alt="" className="w-[120px] h-[34px]" />
        </div>
        <div className="flex items-center gap-[31px] pr-[20px]">
          <img src="/fe_app-menu.svg" alt="" className="w-[28px] h-[28px]" />
          <p
            className="font-semibold text-sm tracking-tighter cursor-pointer"
            onClick={() => {
              showLogin();
            }}
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
      />
      <CreateAccount
        newAccount={newAccount}
        showCreateAccount={showCreateAccount}
        showLogin={showLogin}
      />
    </div>
  );
}
