import { useEffect, useState } from 'react';

export default function Joining() {
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //       setIsLoading(false);
  //     };
  //     fetchData();
  //   }, []);
  return (
    <div>
      {/* {isLoading && ( */}
      <div
        className="bg-black flex justify-center items-center text-white h-screen w-screen relative"
        style={{ height: '100vh !important' }}
      >
        <img
          src="/vidLogo.svg"
          alt=""
          className="absolute left-[40px] top-[20px]"
        />
        <p className="absolute justify-center flex gap-2 items-center font-DMSans font-normal text-[24px]">
          Joining{' '}
          <img
            src="/animation-joining.gif"
            alt=""
            className="bg-black"
            width={60}
          />
        </p>
      </div>
      {/* )} */}
    </div>
  );
}
