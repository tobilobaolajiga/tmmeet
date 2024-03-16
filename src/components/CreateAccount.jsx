import { useState } from 'react';

import CreatePassword from './createPassword';

export default function CreateAccount({
  newAccount,
  showCreateAccount,
  showLogin,
  setNewaccount,
}) {
  const [password, setPassword] = useState(false);
  const passwordModal = () => {
    setPassword(!password);
    setNewaccount(false);
  };
  const [name, setName] = useState('');
  const [lastname, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // const [newUser, setNewUser] = useState({
    //   name: name,
    //   lastname: lastname,
    //   email: email,
    // });
    // console.log(newUser.email);
    passwordModal();
  };

  return (
    <div>
      <div>
        {newAccount && (
          <div className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center ">
            <div className="bg-white m-auto w-3/12 h-4/6 rounded-2xl font-inter">
              <div className="flex flex-col items-center pt-[20px] border-b pb-[20px]">
                <img src="/TM30.svg" alt="" width={60} />
                <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
                  Create a new account{' '}
                </p>
                <p className="text-[#667085] text-[11px] tracking-tight">
                  Enter your details to register
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
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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
                    onChange={(e) => setLast(e.target.value)}
                    value={lastname}
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                  onClick={handleSubmit}
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
        />
      </div>
    </div>
  );
}
