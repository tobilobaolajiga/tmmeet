import { useNavigate } from 'react-router-dom';
export default function LeaveMeeting() {
  const navigate = useNavigate();
  const leaveMeeting = () => {
    navigate('/leave');
  };
  return (
    <div className="absolute top-4 right-10">
      <button
        className="bg-[red] rounded text-white text-center py-2 px-4 font-medium "
        onClick={leaveMeeting}
      >
        Leave Meeting
      </button>
    </div>
  );
}
