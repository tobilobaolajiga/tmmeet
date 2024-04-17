import { useLocation } from 'react-router-dom';
import Creating from './Creating';
import Joining from './Joining';
import { useEffect, useRef, useState } from 'react';
import ShareLinkModal from './ShareLinkModal';

import { toast } from 'react-hot-toast';
export default function GuestVideoLive({
  displayName,
  isAudioOn,
  isVideoOn,
  meetingName,
  setMeetingName,
  meetingLink,
}) {
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
        setIsJoining(false);
        script.src = 'https://media.partytime.ng/external_api.js';
        script.async = true;
        script.onload = initializeJitsi;
        document.body.appendChild(script);
      }, 3000);
    }, 3000);
    return () => {
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

    const domain = 'media.partytime.ng';

    const options = {
      roomName: meetingName || state.meetingName,
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
                <img src="/record.svg" alt="" width={25} />
              </div>
            )}

            <ShareLinkModal
              shareLink={shareLink}
              showShare={showShare}
              setShareLink={setShareLink}
              link={localStorage.getItem('meetingId')}
              meetingLink={meetingLink}
            />
          </div>
        )}
      </div>
    </div>
  );
}
