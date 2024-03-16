export default function ProfileNav() {
  return (
    <div>
      <div className=" flex justify-between items-center px-[38px] py-[12px] font-DMSans border-b">
        <div>
          <img src="/TM30.svg" alt="" className="w-[120px] h-[34px]" />
        </div>
        <div className="flex items-center gap-[25px] pr-[20px]">
          <img src="/fe_app-menu.svg" alt="" className="w-[28px] h-[28px]" />
          <img src="/bigM.svg" alt="" width={37} />
        </div>
      </div>
    </div>
  );
}
