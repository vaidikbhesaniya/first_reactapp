import "./App.css";
import { Suspense, lazy } from "react";
// import Video from "./components/Video";
// import PlayButton from "./components/PlayButton";
import videodb from "./data/Data";
// import btns from "./data/Data";
// import Counter from "./components/Counter";
import { useState } from "react";
import AddForm from "./components/AddForm";

// import Openform from "./components/Openform";
// import VideoList from "./components/VideoList";
const VideoList = lazy(() => import("./components/VideoList"));

// const AddForm = lazy(() => import("./components/AddForm"));
function App() {
  // let va = "vaidik";
  const [videos, setvideos] = useState(videodb);
  const [editableVideo, seteditableVideo] = useState(null);
  const [open, setopen] = useState(false);
  // const ref = useRef(null);
  function addVideos(video) {
    setvideos([
      ...videos,

      {
        ...video,
        id: videos.length + 1,
      },
    ]);
  }

  function deleteVideo(id) {
    setvideos(videos.filter((video) => video.id !== id));
  }
  function editVideo(id) {
    seteditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <>
      <div className="App">
        <Suspense fallback={<>LOADING.......................</>}>
          <VideoList
            videos={videos}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
          ></VideoList>
        </Suspense>
      </div>
      {/* <div>
        <Openform
        // name={"vaidik"}
        ></Openform>
      </div> */}
      <button id="fg2" onClick={() => setopen(() => !open)}>
        {open ? "close" : " open"}
      </button>
      {open ? (
        <div className="form-con">
          <AddForm
            open={open}
            addVideos={addVideos}
            editableVideo={editableVideo}
          ></AddForm>
        </div>
      ) : null}
    </>
  );
}

export default App;
