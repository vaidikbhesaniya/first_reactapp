import "./Video.css";
import App from "../App";
import { useEffect } from "react";
function Video({
  title,
  sr,
  view,
  time,
  children,
  channel,
  deleteVideo,
  id,
  editVideo,
}) {
  useEffect(() => {
    console.log("video playing", id);
  });

  return (
    <div className="cont">
      <div className="x" onClick={() => deleteVideo(id)}>
        X
      </div>
      <div className="xl" onClick={() => editVideo(id)}>
        edit
      </div>
      <img id="im" src={sr} alt="" />
      <div id="tit">
        <p>{title}</p>
      </div>
      <div id="cnl">
        <p>{channel}</p>
      </div>
      <div className="detail">
        <p>
          {view} views <span>.</span> {time}
        </p>
      </div>
      {children}
    </div>
  );
}
export default Video;
