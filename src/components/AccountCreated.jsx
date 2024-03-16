export default function AccountCreated() {
  return (
    <div>
      <div className="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-25 cursor-pointer flex justify-center ">
        <div className="bg-white m-auto rounded-2xl w-3/12 h-3/6 font-inter">
          <div className="flex flex-col items-center py-[20px] border-b">
            <img src="/TM30.svg" alt="" width={60} className="mt-[12px]" />
            <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
              You're good to go..{' '}
            </p>
          </div>
          <div className="px-8 pb-8 pt-4">
            <button className="bg-[#36AAD9] text-white w-full py-[8px] rounded-md mt-[14px] text-[10px]">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
