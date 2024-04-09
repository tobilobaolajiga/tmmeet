import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
export default function ProfileDropdown({
  profileDrop,
  showProfDrop,
  setProfileDrop,
}) {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const token = localStorage.getItem('userToken');

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const Logout = async () => {
    try {
      const response = await axios.post(
        'http://89.38.135.41:9877/api/v1/auth/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response;
      console.log(data);
      navigate('/');
      setProfileDrop(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      {profileDrop && (
        <div className="bg-white w-2/12 h-2/6 rounded-2xl py-8 px-4 fixed z-50 top-16 right-12 shadow-xl font-DMSans">
          <div className="flex gap-4 items-center justify-between">
            <div>
              <p className="text-[14px] font-bold">{userData?.name}</p>
              <p className="text-[10px] text-[#667185]">
                {/* Mayowapeters@gmail.com */}
              </p>
            </div>
            <p onClick={showProfDrop} className="first">
              {userData?.name?.slice(0, 1)}
            </p>
          </div>
          <div className="border-4 border-[#5F5F67] border-opacity-10 rounded-md mt-[20px]">
            <div className="flex gap-4 items-center border-b py-[12px] justify-start pl-6">
              <img src="/settings.svg" alt="" width={15} />{' '}
              <p className="text-[#1A1A1A] text-opacity-70 text-[10px] font-semibold">
                Settings
              </p>
            </div>
            <div
              className="flex gap-4 items-center py-[12px] justify-start pl-6 cursor-pointer"
              onClick={Logout}
            >
              <img src="/logout.svg" alt="" width={15} />{' '}
              <p className="text-[#F1001a] text-[10px] font-semibold">Logout</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
