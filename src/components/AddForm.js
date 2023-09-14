import "./addForm.css";
// import { forwardRef, useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";

let initialState = {
  id: 0,
  sr: "",
  view: "",
  time: "",

  title: "",
  channel: "",
};
function AddForm({ addVideos, editableVideo }) {
  // const inputRef = useRef(null);
  const [video, setvideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setvideo(initialState);
  }
  function handleChange(e) {
    setvideo({ ...video, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    if (editableVideo) {
      setvideo(editableVideo);
    }

    // ref.current.placeholder = "";
    // "can you click on me and enter your video detail here"
    //   .split("")
    //   .forEach((char, i) => {
    //     let ty = setTimeout(() => {
    //       ref.current.placeholder = ref.current.placeholder + char;
    //     }, 200 * i);
    //     return () => {
    //       clearTimeout(ty);
    //     };
    //   });

    // ref.current.style.opacity = 0;

    // for (let i = 0; i < 100; i++) {
    //   setTimeout(() => {
    //     ref.current.style.opacity = i / 100;
    //   }, 100 * i);
    // }
    // console.log(open, "vaidik");
  }, [editableVideo]);

  return (
    <>
      <form action="" id="form">
        <input
          style={{ opacity: 0 }}
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={video.title}
        />

        <input
          type="text"
          name="view"
          placeholder="views"
          onChange={handleChange}
          value={video.view}
        />
        <input
          type="picture"
          name="sr"
          placeholder="src"
          onChange={handleChange}
          value={video.sr}
        />
        <input
          type="text"
          name="channel"
          placeholder="channel name"
          onChange={handleChange}
          value={video.channel}
        />
        <input
          type="text"
          name="time"
          placeholder="time "
          onChange={handleChange}
          value={video.time}
        />
        <button
          id="fg"
          onClick={handleSubmit}
          // onClick={() => {
          //   let a = Math.random() < 0.5 ? 0 : 1;
          //   setvideos([...videos, videos[a]]);
          // }}
        >
          Add Videos
        </button>
      </form>
    </>
  );
}
export default AddForm;
