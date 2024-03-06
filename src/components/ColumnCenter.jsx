import React, { useContext } from "react";
import SongItem from "./SongItem";
import { Context } from "../store/Context";

function ColumnCenter() {
  const {currSong, setCurrSong, isPlaying, setIsPlaying, songs, isFetched}= useContext(Context);
  return (
    <div className=" col-12 col-sm-12 col-md-5 col-lg-5 px-md-0 px-5 pt-3 ">
      <div className="heading fs-5 fw-semibold text-light">Downloaded Music:</div>
      {isFetched && currSong && songs.map((item) => {
        return <SongItem key={item.id} item={item} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currSong={currSong} setCurrSong={setCurrSong} songs={songs} />;
      })}

    </div>
  );
}

export default ColumnCenter;
