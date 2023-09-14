import Video from "./Video";
import PlayButton from "./PlayButton";

// import videodb from "./data/Data";
// import App from "../App";
// import videodb from "./data/Data";
function VideoList({ videos, deleteVideo, editVideo }) {
  return (
    <>
      {videos.map((video) => (
        <Video
          title={video.title}
          channel={video.channel}
          view={video.view}
          sr={video.sr}
          time={video.time}
          id={video.id}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        >
          <div className="btn-con" style={{ clear: "both" }}>
            <PlayButton
              name={"play"}
              onPlay={() => console.log("play")}
              onPause={() => console.log("Pause")}
            ></PlayButton>
          </div>
        </Video>
      ))}
    </>
  );
}
export default VideoList;
