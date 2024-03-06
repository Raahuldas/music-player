import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";

function SongItem({
  item,
  currSong,
  setCurrSong,
  isPlaying,
  setIsPlaying,
  songs,
}) {
  const handlePlay = (id) => {
    if (isPlaying && currSong.id == id) {
      setIsPlaying(false);
    } else {
      const index = songs.findIndex((item) => item.id == id);
      setCurrSong(songs[index]);
      setIsPlaying(true);
    }
  };
  return (
    <div className="song bg-danger row rounded my-1 border border-2 border-danger">
      <div className="col-2 p-1 my-auto">
        <img src={item.album.images[0].url} alt="image" className="rounded w-100" />
      </div>
      <div className="col-8 px-0 my-auto">
        <div className="song-name lh-1 fw-bold text-truncate">{item.name}</div>
        <div className="song-detail mt-2 text-truncate fw-bold">
          <span className="artists pe-1">{item.album.artists[0].name}</span>-
          <span className="album ps-1">{item.album.name}</span>
        </div>
        <div className="time fw-medium ms-1">3:13</div>
      </div>
      <div className="col-2 my-auto ">
        <div
          className="fs-1 d-flex justify-content-center"
          onClick={() => handlePlay( item.id)}
        >
          {currSong.id == item.id && isPlaying ? (
            <FaRegCirclePause />
          ) : (
            <FaRegCirclePlay />
          )}
        </div>
      </div>
    </div>
  );
}

export default SongItem;
