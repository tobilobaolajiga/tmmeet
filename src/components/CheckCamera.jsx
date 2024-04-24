import { useState, useEffect } from 'react';

import VideoPreview from './VideoPreview';
import VideoLiveStream from './VideoLivestream';

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import fakeUa from 'fake-useragent';
import axios from 'axios';

import ioClient from 'socket.io-client';
// import { io } from 'socket.io-client';
import { ClipLoader } from 'react-spinners';

export default function CheckCamera({
  profileDrop,
  showProfDrop,
  setProfileDrop,
  meetingLink,
  meetingName,
  setMeetingName,
}) {
  const [loading, setLoading] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [micImg, setMicImg] = useState('/mic.svg');
  const [vidImg, setVidImg] = useState('/video.svg');
  const [displayName, setDisplayName] = useState('');
  const [videoLivestream, setVideoLiveStream] = useState(false);
  // const meetingDetails = JSON.parse(localStorage.getItem('meetingDetails'));
  const [userAgent, setUserAgent] = useState('');
  const navigate = useNavigate();

  // const generateUniqueId = () => {
  // Check if the unique ID is already stored in localStorage
  // let userAgent = localStorage.getItem('userAgent');
  // // If not stored, generate a new unique ID
  // if (!userAgent) {
  //   userAgent =
  //     Math.random().toString(36).substring(2) + Date.now().toString(36);
  //   // Store the generated unique ID in localStorage
  //   userAgent = userAgent.substring(0, 6);
  //   localStorage.setItem('userAgent', userAgent);
  // };

  // Get or generate a unique user ID
  const socket = ioClient('wss://api-meet.tm-dev.xyz');

  useEffect(() => {
    const user = navigator.userAgent;
    setUserAgent(user);
    console.log(user);
    localStorage.setItem('userAgent', user);
    getDetails(meetingCode);

    // };
    socket.on('connect', (data) => {
      socket.emit('joinRoom', roomId);
      console.log(data.message);

      // navigate(`/video/${meetingCode}`, {
      //   state: {
      //     isVideoOn,
      //     isAudioOn,
      //     displayName,
      //     meetingName,
      //   },
      // });
    });

    // Listen for 'disconnect' event
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('message', (data) => {
      socket.emit('joinRoom', userAgent);
      console.log(data.message);
      if (data.message == 'Allow') {
        navigate(`/video/${meetingCode}`, {
          state: {
            isVideoOn,
            isAudioOn,
            displayName,
            meetingName,
          },
        });
      }
    });
  }, []);
  const userId = localStorage.getItem('userId');
  const userId = localStorage.getItem('roomId');
  const userRequest = {
    room: roomId,
    id: userAgent,
    name: displayName,
    message: `${displayName} wants to join`,
  };

  const sendRequest = async () => {
    setLoading(true);
    console.log('hhhhhhhhhhhhhhhh', userRequest);
    socket.emit('message', userRequest);
  };
  const token = localStorage.getItem('userToken');

  const meetingCode =
    localStorage.getItem('meeting') === ''
      ? ''
      : localStorage.getItem('meeting').substring(32, 68);
  const getDetails = async (meetingCode) => {
    try {
      const response = await axios.get(
        `https://api-meet.tm-dev.xyz/api/v1/meeting/particular/${meetingCode}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem('meetingRef', response?.data?.data?.meetingId);
      localStorage.setItem('meeting', JSON.stringify(response?.data?.data));
      localStorage.setItem(
        'roomId',
        JSON.stringify(response?.data?.data?.userId)
      );
      console.log(localStorage.getItem('meeting'));
    } catch (error) {
      console.log(error);
      // console.log(error.response.data.status);
      console.log(error.message);
    }
  };
  const showVideoLiveStream = () => {
    displayName
      ? navigate(`/video/${meetingCode}`, {
          state: {
            isVideoOn,
            isAudioOn,
            displayName,
            meetingName,
          },
        })
      : toast.error('Set Display Name');
  };
  const hostAgent = localStorage.getItem('hostAgent');
  const onClick = () => {
    if (hostAgent == userAgent) {
      console.log(hostAgent, userAgent);
      showVideoLiveStream();
    } else {
      sendRequest();
    }
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
              vidImg={vidImg}
              setVidImg={setVidImg}
              micImg={micImg}
              setMicImg={setMicImg}
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
                onClick={onClick}
              >
                {loading ? (
                  <ClipLoader color="#36D7B7" loading={loading} size={16} />
                ) : (
                  'ASK TO JOIN'
                )}
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
          setIsAudioOn={setIsAudioOn}
          setIsVideoOn={setIsVideoOn}
        />
      )}
    </div>
  );
}
