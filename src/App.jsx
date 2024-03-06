import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Controls from "./components/Controls";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "./store/Context";

function App() {
  const musicElement = useRef();
  const [songs, setSongs] = useState();
  const [currSong, setCurrSong] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [search, setSearch] = useState("raftaar");
  
    const searchElement = useRef();
    const handleSearch = (e)=>{
      e.preventDefault();    
      setSearch(searchElement.current.value);
    }

  useEffect(() => {
    if (isPlaying && isFetched) {
      musicElement.current.play();
    } else if(isFetched){
      musicElement.current.pause();
    }
  }, [isPlaying, currSong]);

  useEffect(()=>{

    
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
      };
      
      fetch(
        `https://v1.nocodeapi.com/rahuldas/spotify/PEmliGDKjlwUtzXw/search?q=${search}&type=track&perPage=30&page=10`,
        requestOptions
        )
        .then((response) => response.json())
        .then((result) => {
          setSongs(result.tracks.items);
          setCurrSong(result.tracks.items[0]);
          setIsFetched(true);
        })
        .catch((error) => console.log("error", error));
        
    },[search])

  const onPlaying = () => {
    let ct = musicElement.current.currentTime;
    let duration = musicElement.current.duration;

    setCurrSong({
      ...currSong,
      currTime: ct,
      length: duration,
      progress: (ct / duration) * 100,
    });
  };

  return (
    <Context.Provider
      value={{ currSong, setCurrSong, songs, isPlaying, setIsPlaying, isFetched, setSearch , handleSearch, searchElement}}
    >
      <div className="vh-100 bg-dark d-flex flex-column">
        <Header />
          <div className="contents-container m-auto h-100 w-100 mx-auto d-flex justify-content-center  overflow-y-scroll">
          <Outlet />
        </div>
        <audio
        src={currSong?.preview_url}
        ref={musicElement}
        onTimeUpdate={onPlaying}
        ></audio>
        <Controls
        musicElement={musicElement}
        currSong={currSong}
        setCurrSong={setCurrSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        />
      </div>
     
    </Context.Provider>
  );
}

export default App;
