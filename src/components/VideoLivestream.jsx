import { useLocation } from 'react-router-dom';
import Creating from './Creating';
import Joining from './Joining';
import { useEffect, useRef, useState } from 'react';
import AdmitModal from './AdmitModal';
import ShareLinkModal from './ShareLinkModal';
import HostControl from './HostControl';
import socketIOClient from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import ioClient from 'socket.io-client';
import LeaveMeeting from './LeaveMeeting';
export default function VideoLiveStream({
  displayName,
  isAudioOn,
  isVideoOn,
  meetingName,
  meetingLink,
  setIsAudiOn,
  setIsVideoOn,
}) {
  const hostAgent = localStorage.getItem('hostAgent');

  const [guestRequest, setGuestRequest] = useState(false);
  const socket = ioClient('wss://' + import.meta.env.VITE_BASE_URL_SOCKET);
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
      socket.emit('joinRoom', userId);
    });

    // Listen for 'disconnect' event
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('message', (data) => {
      toast.success(data.message);
      localStorage.setItem('admitMsg', data.message);
      localStorage.setItem('admitRoom', data.room);
      localStorage.setItem('admitId', data.id);
      localStorage.setItem('admitName', data.name);
      console.log(data);

      setGuestRequest(true);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);
  const videoId = localStorage.getItem('videoId');
  const token = localStorage.getItem('userToken');
  const userId = localStorage.getItem('userId');
  const meetingCode =
    localStorage.getItem('meetingCode') === ''
      ? ''
      : localStorage.getItem('meetingCode');

  const admitGuest = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + `meeting/accept/${meetingCode}`,
        {
          room: localStorage.getItem('admitRoom'),
          id: localStorage.getItem('admitId'),
          name: localStorage.getItem('admitName'),
          message: localStorage.getItem('admitMsg'),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      console.log(response?.data?.message);
      closeAdmit();
    } catch (error) {
      toast.error(error.message);
    }
  };
  const closeAdmit = () => {
    setGuestRequest(false);
  };
  const session = useRef();
  const [initialized, setInitialized] = useState(false);
  const [jitsiLoading, setJitsiLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isJoining, setIsJoining] = useState(false);
  const { state } = useLocation();

  useEffect(() => {
    let script = document.createElement('script');
    const timeout = setTimeout(() => {
      setIsLoading(false);

      setIsJoining(true);

      setTimeout(() => {
        // setiSjOINING(FALSE)
        script.src = 'https://media.partytime.ng/external_api.js';
        script.async = true;
        script.onload = initializeJitsi;
        document.body.appendChild(script);
      }, 3000);
    }, 3000);
    return () => {
      setIsJoining(false);
      clearTimeout(timeout);
      if (session.current) {
        // Disconnect from the Jitsi video call
        session.current.disconnect();
      }

      // Other cleanup actions
      // ...

      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    // let script = document.createElement('script');
    // script.src = 'https://media.partytime.ng/external_api.js';
    // script.async = true;
    // script.onload = initializeJitsi;
    // document.body.appendChild(script);
    // return () => {
    //   if (session.current) {
    //     // Disconnect from the Jitsi video call
    //     session.current.disconnect();
    //   }
    //   // Other cleanup actions
    //   // ...
    //   if (document.body.contains(script)) {
    //     document.body.removeChild(script);
    //   }
    // };
  }, []);
  const initializeJitsi = () => {
    // if (initialized) {
    //   // setIsLoading(true)
    //   return;
    // }

    const domain = 'mediaserver.tm30.net';

    const options = {
      roomName: localStorage.getItem('meetingName'),
      width: '100%',
      height: '100%',
      parentNode: document.querySelector('#meet'),
      lang: 'en',
      configOverwrite: {
        startWithAudioMuted: false,
        startWithVideoMuted: false,
        prejoinPageEnabled: false,
        enableLobbyChat: true,
        disableInitialGUM: true,
        disableDeepLinking: true,
        preferH264: true,
      },
      userInfo: {
        displayName: displayName || state.displayName,
      },
      interfaceConfigOverwrite: {
        SHOW_CHROME_EXTENSION_BANNER: false,
        TOOLBAR_ALWAYS_VISIBLE: false,
        SETTINGS_SECTIONS: ['devices', 'language'],
        SHOW_POWERED_BY: false,
        SHOW_BRAND_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        HIDDEN_DEEP_LINKING_LOGO: true,
        DEFAULT_LOGO_URL: '',
        DEFAULT_WELCOME_PAGE_LOGO_URL: '',
        JITSI_WATERMARK_LINK: '',
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        DEFAULT_REMOTE_DISPLAY_NAME: 'Vertical View',
        DEFAULT_LOCAL_DISPLAY_NAME: 'Me',
        DISABLE_DOMINANT_SPEAKER_INDICATOR: true,
        DISABLE_FOCUS_INDICATOR: true,
        DISABLE_NOTIFICATIONS: true,
        DISABLE_POPUP_NOTIFICATIONS: true,
        DISABLE_VIDEO_BACKGROUND: true,
        TOOLBAR_BUTTONS: [
          'camera',
          'microphone',
          'raisehand',
          'desktop',
          'fullscreen',
          'videobackgroundblur',
          'tileview',
          'profile',
          'chat',
        ],
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);
    window.jitsi = api;
    api.on('videoConferenceJoined', () => {
      // Set jitsiLoading to false when the conference is joined
      setJitsiLoading(false);
      setIsLoading(false);
      // const isVideoOn = isVideoOn;
      // const isAudioOn = isAudioOn;

      // api.executeCommand('toggleVideo');
      if (isVideoOn || state.isVideoOn) {
        api.executeCommand('toggleVideo');
      }
      if (isAudioOn || state.isAudioOn) {
        api.executeCommand('toggleAudio');
      }

      // api.executeCommand('toggleAudio');
      // console.log(isVideoOn);

      // console.log("finished", isLoading);
    });
    // setIsLoading(true);
    // console.log("still", isLoading);
    setInitialized(true);
  };

  const [options, setOptions] = useState(false);
  const showOptions = () => {
    setOptions(!options);
  };
  const [hostControl, setHostControl] = useState(false);
  const showHostControl = () => {
    setHostControl(!hostControl);
  };

  const [shareLink, setShareLink] = useState(false);
  const showShare = () => {
    setShareLink(!shareLink);
  };
  // )}
  return (
    <div>
      <div>
        {isLoading && <Creating />}
        {isJoining && <Joining />}

        {!isLoading && !isJoining && (
          <div
            id="meet"
            className="w-full h-full relative"
            style={{ height: '100vh !important' }}
          >
            {!jitsiLoading && (
              <div
                className={`flex bg-[#141414] w-[100px] absolute py-4 rounded left-[20px] justify-center gap-2 bottom-[30px]  
        }`}
              >
                <img
                  src="/lock.svg"
                  alt=""
                  width={25}
                  onClick={showHostControl}
                  className="cursor-pointer"
                />
                <img src="/record.svg" alt="" width={25} />
              </div>
            )}
            <HostControl
              hostControl={hostControl}
              showHostControl={showHostControl}
              options={options}
              showOptions={showOptions}
            />
            <AdmitModal
              guestRequest={guestRequest}
              // admitGuest={admitGuest}
              displayName={displayName}
              // showAdmit={showAdmit}
              admitGuest={admitGuest}
              closeAdmit={closeAdmit}
            />
            {hostAgent && (
              <ShareLinkModal
                shareLink={shareLink}
                showShare={showShare}
                setShareLink={setShareLink}
                meetingCode={meetingCode}
              />
            )}
            {!jitsiLoading && (
              <LeaveMeeting
                isAudioOn={isAudioOn}
                isVideoOn={isVideoOn}
                setIsVideoOn={setIsVideoOn}
                setIsAudioOn={setIsAudiOn}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
