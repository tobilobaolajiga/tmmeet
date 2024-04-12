import { useState, useRef, useEffect } from 'react';

export default function VideoPreview({
  isVideoOn,
  isAudioOn,
  setIsVideoOn,
  setIsAudioOn,
  displayName,
}) {
  const videoRef = useRef();
  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };
  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
  };
  useEffect(() => {
    const enableVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: isVideoOn,
          audio: isAudioOn,
        });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing user media:', error);
      }
    };
    enableVideoStream();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [isVideoOn, isAudioOn]);

  const setBgColor = () => {
    return isVideoOn ? '' : 'black';
  };

  return (
    <div>
      <div className="">
        <div>
          {!isVideoOn ? (
            <div className="relative">
              <div className="ml-[90px] relative rounded-lg my-[50px]  bg-black  w-[630px] h-[530px]">
                <img
                  src="/avatar.svg"
                  alt=""
                  className="absolute top-[180px] left-[230px] rounded-full z-50 bg-white py-2 px-2 border-none"
                  width={150}
                />
              </div>
              <div className="absolute flex bottom-[50px] left-[330px] gap-4 items-center">
                <button>
                  <img src="/mic.svg" alt="" width={50} onClick={toggleAudio} />
                </button>
                <button>
                  {' '}
                  <img
                    src="/video.svg"
                    alt=""
                    width={50}
                    onClick={toggleVideo}
                  />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <video
                ref={videoRef}
                autoPlay
                className="ml-[90px] my-12 rounded-lg relative  w-[630px] h-[530px]"
              ></video>
              <div className="absolute flex bottom-[100px] left-[330px] gap-4 items-center">
                <button>
                  <img src="/mic.svg" alt="" width={50} onClick={toggleAudio} />
                </button>
                <button>
                  {' '}
                  <img
                    src="/video.svg"
                    alt=""
                    width={50}
                    onClick={toggleVideo}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
