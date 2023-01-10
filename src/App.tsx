import Image from "../src/assets/image.svg";
import Image2 from "../src/assets/image2.jpg";
import { FastForward, Play, Rewind } from "phosphor-react";
import ProgressBar from "@ramonak/react-progress-bar";
import AudioPlayer from "./Components/AudioPlayer";
import "react-h5-audio-player/lib/styles.css";
import Music1 from "../src/assets/musica1.mp3";
import { IconButton } from "@mui/material";
import "animate.css";

import React, { useState, useEffect, useRef } from "react";
import { number } from "prop-types";

function App() {
  const tracks = [];

  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(Music1));
  const intervalRef = useRef<Number>();
  const isReady = useRef();

  const { duration } = audioRef.current;
  const toPrevTrack = () => {
    audioRef.current.currentTime = audioRef.current.currentTime - 10;
  };

  const toNextTrack = () => {
    audioRef.current.currentTime = audioRef.current.currentTime + 10;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      console.log(isPlaying);
      startTimer();
      console.log(audioRef.current.currentTime);
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const startTimer = () => {
    const timer = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
        clearInterval(timer);
        setIsPlaying(false);
      } else {
        setTrackProgress(Math.round(audioRef.current.currentTime));
        console.log(Math.round(audioRef.current.currentTime));
      }
    }, 3000);
  };

  return (
    <div className="sm:fixed w-full h-full flex items-center justify-center p-5 sm:p-0 text-gray-300 bg-[#0F0D13]">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="row-span-2 col-span-2 sm:col-span-1 ">
          <div className="bg-[#2A2141] p-10 flex flex-col gap-8 rounded-lg animate__animated animate__backInLeft">
            <img src={Image} alt="image" className="rounded-lg" />
            <div>
              <p className="text-3xl font-bold ">Acorda Devinho</p>
              <p className="text-lg  text-gray-400">Banda RockeatSeat</p>
            </div>
            <div className="flex items-center justify-between ">
              <AudioPlayer
                isPlaying={isPlaying}
                onPrevClick={toPrevTrack}
                onNextClick={toNextTrack}
                onPlayPauseClick={setIsPlaying}
                progress={trackProgress}
                duration={duration}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 bg-[#2A2141] p-10 flex flex-col gap-6 rounded-lg animate__animated animate__backInDown animate__delay-1s">
          <div className="flex gap-4">
            <img src={Image2} alt="image" className="w-16 rounded-lg" />
            <div>
              <p className="text-2xl font-bold ">Best of Me 🤘</p>
              <p className="text-lg  text-gray-400">Neffex</p>
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <Rewind weight="fill" size={32} />
            <Play size={32} weight="fill" />
            <FastForward weight="fill" size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <ProgressBar
              completed={69}
              height="8px"
              bgColor="#FFFFFF"
              baseBgColor="#939393"
              maxCompleted={100}
              isLabelVisible={false}
            />
            <div className="flex items-center justify-between text-gray-400">
              <p>02:50</p>
              <p>03:44</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 bg-[#2A2141] p-10 flex flex-col gap-6 rounded-lg justify-center animate__animated animate__animated animate__backInUp animate__delay-2s">
          <div className="flex gap-4">
            <img src={Image} alt="image" className="w-20" />
            <div>
              <p className="text-2xl font-bold ">Acorda Devinho</p>
              <p className="text-lg  text-gray-400">Banda Rockeatseat</p>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <Rewind weight="fill" size={32} />
            <Play size={32} weight="fill" />
            <FastForward weight="fill" size={32} />
          </div>
          {/* <div className="flex flex-col gap-2">
            <ProgressBar
              completed={50}
              height="8px"
              bgColor="#FFFFFF"
              baseBgColor="#939393"
              maxCompleted={100}
              isLabelVisible={false}
            />
            <div className="flex items-center justify-between text-gray-400">
              <p>00:00</p>
              <p>03:00</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
