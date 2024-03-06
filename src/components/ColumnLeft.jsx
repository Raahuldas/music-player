import React from "react";
import { useContext } from "react";
import { Context } from "../store/Context";

function ColumnLeft() {
  const {currSong} = useContext(Context);
  return (
    <div className="cover-art col-12 col-sm-12 col-md-5 col-lg-5 px-4 px-md-0 p-1 ">
      <div
        className="card card-cover w-100 h-100 my-auto overflow-hidden text-bg-dark rounded-4 shadow-lg"
        style={{backgroundImage: `url(${currSong && currSong.album.images[0].url})`, backgroundSize: "100%", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold ">
            {currSong && currSong.name}
          </h3>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img
                src={currSong && currSong.album.images[0].url}
                alt="Cover Art"
                width="32"
                height="32"
                className="rounded-circle border border-white"
              />
            </li>
            <li className="d-flex align-items-center me-3">
              <small>{currSong && currSong.name}</small>
            </li>
            <li className="d-flex align-items-center">
              <small>{currSong && currSong.artists[0].name}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ColumnLeft;
