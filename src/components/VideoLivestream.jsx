/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Creating from './Creating';
import Joining from './Joining';
import { useEffect, useRef, useState } from 'react';
import AdmitModal from './AdmitModal';
import ShareLinkModal from './ShareLinkModal';
import HostControl from './HostControl';
import CheckCamera from './CheckCamera';

export default function VideoLiveStream({ displayName, isAudioOn, isVideoOn }) {
  const [meetingName, setMeetingName] = useState('');
  const session = useRef();
  const [initialized, setInitialized] = useState(false);
  const [jitsiLoading, setJitsiLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isJoining, setIsJoining] = useState(false);
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
      roomName: meetingName,
      width: '100%',
      height: '100%',
      parentNode: document.querySelector('#meet'),
      lang: 'en',
      configOverwrite: {
        startWithAudioMuted: true,
        startWithVideoMuted: true,
        prejoinPageEnabled: false,
        enableLobbyChat: true,
        disableInitialGUM: true,
        disableDeepLinking: true,
        preferH264: true,
      },
      userInfo: {
        displayName: displayName,
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

    api.on('videoConferenceJoined', () => {
      // Set jitsiLoading to false when the conference is joined
      setJitsiLoading(false);
      setIsLoading(false);
      // const isVideoOn = isVideoOn;
      // const isAudioOn = isAudioOn;
      // api.executeCommand('toggleVideo');

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
  const [admit, setAdmit] = useState(false);
  const showAdmit = () => {
    setAdmit(!admit);
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
                  src={hostControl ? 'openlock.svg' : '/lock.svg'}
                  alt=""
                  width={25}
                  onClick={showHostControl}
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
              displayName={displayName}
              admit={admit}
              showAdmit={showAdmit}
              setAdmit={setAdmit}
            />
            <ShareLinkModal
              shareLink={shareLink}
              showShare={showShare}
              setShareLink={setShareLink}
            />
          </div>
        )}
      </div>
    </div>
  );
}
