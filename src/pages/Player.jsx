import React, { useRef } from "react";
// import "./player.scss";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsSkipEndCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";

const Player = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  return (
    <div className="player_container w-10/12 ">
      <div class="w-full flex flex-col px-10 pb-6 z-50 ">
        <input
          type="range"
          id="song-percentage-played"
          class="amplitude-song-slider mb-3"
          step={currentSong.progress}
        />
        <div class="flex w-full justify-between">
          <span class="amplitude-current-time text-xs font-sans tracking-wide font-medium text-sky-500 dark:text-sky-300"></span>
          <span class="amplitude-duration-time text-xs font-sans tracking-wide font-medium text-gray-500"></span>
        </div>
      </div>
      <div className="controls h-control-panel px-10 rounded-xl bg-control-panel-light-background border-t border-gray-200 flex items-center justify-between z-50 dark:bg-control-panel-dark-background dark:border-gray-900">
        <button className="btn_action" onClick={skipBack}>
          <div class="cursor-pointer amplitude-prev">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 7C26 5.76393 24.5889 5.05836 23.6 5.8L11.6 14.8C10.8 15.4 10.8 16.6 11.6 17.2L23.6 26.2C24.5889 26.9416 26 26.2361 26 25V7Z"
                fill="#94A3B8"
                stroke="#94A3B8"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M6 5L6 27"
                stroke="#94A3B8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
        <div class="cursor-pointer amplitude-prev">
          {isplaying ? (
            <button className="btn_action pp" onClick={PlayPause}>
              <svg
                id="pause-icon"
                width="24"
                height="36"
                viewBox="0 0 24 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="6"
                  height="36"
                  rx="3"
                  class="fill-slate-500 dark:fill-slate-400"
                />
                <rect
                  x="18"
                  width="6"
                  height="36"
                  rx="3"
                  class="fill-slate-500 dark:fill-slate-400"
                />
              </svg>
            </button>
          ) : (
            <button className="btn_action pp" onClick={PlayPause}>
              <svg
                id="play-icon"
                class="ml-[10px]"
                width="31"
                height="37"
                viewBox="0 0 31 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.6901 16.6608L4.00209 0.747111C2.12875 -0.476923 0.599998 0.421814 0.599998 2.75545V33.643C0.599998 35.9728 2.12747 36.8805 4.00209 35.6514L29.6901 19.7402C29.6901 19.7402 30.6043 19.0973 30.6043 18.2012C30.6043 17.3024 29.6901 16.6608 29.6901 16.6608Z"
                  class="fill-slate-500 dark:fill-slate-400"
                />
              </svg>
            </button>
          )}
        </div>
        <button className="btn_action" onClick={skiptoNext}>
          <div class="cursor-pointer amplitude-next">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 7C6 5.76393 7.41115 5.05836 8.4 5.8L20.4 14.8C21.2 15.4 21.2 16.6 20.4 17.2L8.4 26.2C7.41115 26.9416 6 26.2361 6 25V7Z"
                fill="#94A3B8"
                stroke="#94A3B8"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M26 5L26 27"
                stroke="#94A3B8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Player;
