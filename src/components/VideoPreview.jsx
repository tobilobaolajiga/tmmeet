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
        <video
          ref={videoRef}
          autoPlay
          className="ml-[90px] my-12 rounded-md relative  w-[630px] h-[480px]"
          style={{ backgroundColor: setBgColor() }}
        ></video>
        <div className="absolute flex bottom-16 left-[330px] gap-4 items-center">
          <button>
            <img src="/mic.svg" alt="" width={50} onClick={toggleAudio} />
          </button>
          <button>
            {' '}
            <img src="/video.svg" alt="" width={50} onClick={toggleVideo} />
          </button>
        </div>
      </div>
    </div>
  );
}
