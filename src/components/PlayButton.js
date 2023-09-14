import "./PlayButton.css";
// import App from "../App";
// import Data from "../data/Data";
// import videos from "../data/Data";
import { useState } from "react";
function PlayButton({ onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);
  function change(e) {
    // e.stopPropagation();
    if (playing) {
      onPlay();
    } else {
      onPause();
    }
    setPlaying(!playing);

    // alert(msg);
  }

  return (
    <>
      <button id="btn" onClick={() => change()}>
        {playing ? "Pause" : "Play"}
        {playing ? "||" : ">"}
      </button>
    </>
  );
}
export default PlayButton;
