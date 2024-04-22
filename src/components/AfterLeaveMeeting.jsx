import { useNavigate } from 'react-router-dom';
export default function AfterLeaveMeeting() {
  const navigate = useNavigate();
  const goHome = () => {
    localStorage.removeItem('meeting');
    navigate('/');
  };

  return (
    <div className="h-screen w-screen">
      <div>Countdown</div>
      <div className="flex justify-center items-center flex-col ">
        <p>You've left the meeting</p>
        <div className="flex gap-2 mt-4">
          <button className="text-[#36aad9] bg-white px-4 py-2">Rejoin</button>
          <button
            className="bg-[#36aad9] text-white px-4 py-2"
            onClick={goHome}
          >
            Return to Home Screen
          </button>
        </div>
        {/* <div className="shadow-md ">
          <p>How was the audio and video?</p>
        </div> */}
      </div>
    </div>
  );
}
