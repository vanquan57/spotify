import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Navbar from "./components/Navbar";
import Playing from "./components/Playing";
import { Songs } from "./Context";
import DataSongs from './data/songs.json'

import './App.css'
import { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handlSetSong = (idSong) => {
    const song = DataSongs.find((song) => (song.id === idSong));
    if (!song) {
      setSong(DataSongs[0]);
    } else {
      setSong(song);
    }
  }
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handlSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-[#334155] h-screen-navbar overflow-hidden">
          <DetailSong />
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>

    </div>
  );
}

export default App;
