export default function Products({ products, showProducts }) {
  return (
    <div>
      {products && (
        <div className="bg-[#f4f4f4] rounded-md w-2/5 h-3/8 fixed z-50 right-8 -mt-2 py-4 px-4  animate__animated animate__slideInDown ">
          <div className="flex justify-between">
            <p className="font-DMSans text-[11px] font-bold text-[#5f5f67]">
              TM30 Products
              <span
                className="text-[#36AAD9]
"
              >
                *
              </span>
            </p>
            <img
              src="/cross.svg"
              alt=""
              width={10}
              onClick={showProducts}
              className="cursor-pointer "
            />
          </div>

          <div className="flex gap-2 mt-4 items-center">
            <div className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center">
              <img src="/agency.svg" alt="" width={50} />
            </div>
            <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
              <img src="/pmb.svg" alt="" width={80} />
            </div>
            <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
              <img src="/hope.svg" alt="" width={80} />
            </div>
            <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
              <img src="/payattitude.svg" alt="" width={80} />
            </div>
            <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
              <img src="/pos.svg" alt="" width={80} />
            </div>
            <div className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center">
              <img src="/bi.svg" alt="" width={50} />
            </div>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <div className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center">
              <img src="/tmsaas.svg" alt="" width={100} />
            </div>
            <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
              <img src="/backUpCash.svg" alt="" width={80} />
            </div>
            <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
              <img src="/payarena.svg" alt="" width={80} />
            </div>
            <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
              <img src="/partyTime.svg" alt="" width={80} />
            </div>
            <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
              <img src="/homes.svg" alt="" width={80} />
            </div>
            <div className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center">
              <img src="/moneyField.svg" alt="" width={60} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
