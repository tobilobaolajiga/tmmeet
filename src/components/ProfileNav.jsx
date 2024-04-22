import { useEffect, useRef, useState } from 'react';
import Products from './Products';

export default function ProfileNav({
  profileDrop,
  showProfDrop,
  setProfileDrop,
  showProducts,
  products,
}) {
  const refreshed = useRef(false);
  const userData = JSON.parse(localStorage.getItem('userData'));
  // useEffect(() => {
  //   if (!refreshed.current) {
  //     // window.location.assign(window.location.pathname);
  //     refreshed.current = true;
  //   }
  // }, []);

  return (
    <div>
      <div className=" flex justify-between items-center px-[38px] py-[12px] font-DMSans border-b">
        <div>
          <img src="/TM30.svg" alt="" className="w-[120px] h-[34px]" />
        </div>
        <div className="flex items-center gap-[25px] pr-[20px]">
          <img
            src="/fe_app-menu.svg"
            alt=""
            className="w-[28px] h-[28px] cursor-pointer"
            onClick={showProducts}
          />
          <p onClick={showProfDrop} className="cursor-pointer first">
            {userData?.fullName?.slice(0, 1)}
          </p>
        </div>
      </div>
      <Products products={products} showProducts={showProducts} />
    </div>
  );
}
