import {  useRef } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { FaRegCirclePause } from "react-icons/fa6";
// import songList from "../store/items";

function Controls({
  musicElement,
  currSong,
  setCurrSong,
  isPlaying,
  setIsPlaying,
  songs,
}) {
  const progressBar = useRef();
  // const [songs, setSongs] = useState(songList);


  const handlePrevSong = () => {
    const index = songs.findIndex((item) => item.id == currSong.id);
    if (index == 0) {
      setCurrSong(songs[songs.length - 1]);
    } else {
      setCurrSong(songs[index - 1]);
    }
    musicElement.current.currentTime = 0;
  };

  const handleNextSong = () => {
    const index = songs.findIndex((item) => item.id == currSong.id);
    if (index == songs.length-1) {
      setCurrSong(songs[0]);
    } else {
      setCurrSong(songs[index + 1]);
    }
    musicElement.current.currentTime = 0;
  };

  // if(!isPlaying){
  //   progressBar.current.value = 0;
  // }

  if (isPlaying) {
    progressBar.current.value = currSong.progress;
  }

  const handleChangeCurrTime = () => {
    musicElement.current.currentTime =
      (progressBar.current.value / 100) * currSong.length;
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  function format(sec) {
    let min = Math.floor(sec / 60);
    let seconds = Math.floor(sec % 60);
    return min + ":" + seconds;
  }

  return (
    <div className=" mt-auto py-3 border-top position-relative">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <input
            type="range"
            name="progressbar"
            id="progressbar"
            className="w-75"
            ref={progressBar}
            min={0}
            max={100}
            onChange={handleChangeCurrTime}
          />
        </div>
        <div className="w-50 m-auto text-center text-light my-1">
          <span className="fs-1" onClick={handlePrevSong}>
            <IoPlaySkipBack />
          </span>
          {isPlaying ? (
            <span className="fs-1 mx-3" onClick={handlePause}>
              <FaRegCirclePause />
            </span>
          ) : (
            <span className="fs-1 mx-3" onClick={handlePlay}>
              <FaRegCirclePlay />
            </span>
          )}
          <span className="fs-1" onClick={handleNextSong}>
            <IoPlaySkipForward />
          </span>
        </div>
        { isPlaying && <div className="gif position-absolute bottom-0 end-0 ">
          <img src="gif.gif" alt="gif" className="w-100" />
        </div>}
        <div className="time-duration text-light position-absolute">
          {isPlaying
            ? `${format(musicElement.current.currentTime)}/${format(
                musicElement.current.duration
              )}`
            : "0:00/0:00"}
        </div>
      </div>
    </div>
  );
}

export default Controls;
