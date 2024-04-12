import { useState, useEffect } from 'react';
import ProfileNav from './ProfileNav';
import VideoPreview from './VideoPreview';
import VideoLiveStream from './VideoLivestream';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import axios from 'axios';

export default function CheckCamera({
  profileDrop,
  showProfDrop,
  setProfileDrop,
  meetingLink,
  meetingName,
  setMeetingName,
}) {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [displayName, setDisplayName] = useState('');
  const [videoLivestream, setVideoLiveStream] = useState(false);

  const navigate = useNavigate();

  const showVideoLiveStream = () => {
    displayName
      ? navigate(`/video/${localStorage.getItem('refId')}`, {
          state: {
            isVideoOn,
            isAudioOn,
            displayName,
            meetingName,
          },
        })
      : toast.error('Set Display Name');
  };

  //

  return (
    <div className="">
      <div>
        {/* <ProfileNav
          profileDrop={profileDrop}
          showProfDrop={showProfDrop}
          setProfileDrop={setProfileDrop}
        /> */}
        <div className="flex   ">
          <div className="basis-2/3">
            {' '}
            <VideoPreview
              isVideoOn={isVideoOn}
              isAudioOn={isAudioOn}
              setIsAudioOn={setIsAudioOn}
              setIsVideoOn={setIsVideoOn}
              displayName={displayName}
            />
          </div>
          <div className="basis-1/3 my-[150px] ">
            <p className="font-inter text-[20px] font-semibold text-center mb-2 w-[320px]">
              Ready to Join?
            </p>
            <div className="border rounded-lg w-[320px] py-6 px-6 shadow-md z-50 top-2 -mb-[3px] ">
              <p className="font-inter text-[11px] font-medium text-[#344054]">
                Display name
              </p>
              <div className="relative border-b pb-6">
                <input
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  type="text"
                  placeholder="Enter your name here"
                  className="border rounded-md outline-none text-[11px] w-full py-[8px] flex items-center mt-[4px] px-2 placeholder:text-[10px] placeholder-center mb-4"
                />
                <button className="absolute top-[6px] text-white bg-[#36aad9] right-[6px] text-[9px] px-[10px] py-[4px] rounded">
                  Save
                </button>
              </div>
              <button
                className="border bg-[#36aad9] text-white text-center py-[10px] rounded-md flex justify-center w-full text-[11px] mt-8 mb-4 "
                onClick={showVideoLiveStream}
              >
                ASK TO JOIN
              </button>
            </div>
            <p className="flex items-center justify-center w-[320px] text-[#9e9e9e] gap-[4px] bg-[#ececec] rounded-b-lg py-[12px] shadow-md">
              <span className="text-[11px] font-DMSans">Secured by</span>{' '}
              <img src="/tm.svg" alt="" width={30} />
            </p>
          </div>
        </div>
        <ProfileDropdown
          profileDrop={profileDrop}
          showProfDrop={showProfDrop}
        />
      </div>

      {videoLivestream && (
        <VideoLiveStream
          displayName={displayName}
          isVideoOn={isVideoOn}
          isAudioOn={isAudioOn}
          meetingName={meetingName}
          setMeetingName={setMeetingName}
          meetingLink={meetingLink}
        />
      )}
    </div>
  );
}
