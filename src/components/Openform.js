import App from "../App";
import { useState } from "react";
function Openform() {
  const [opd, setfirst] = useState(false);
  function Open({ opS, clS }) {
    if (opd) {
      console.log("open");
    } else {
      console.log("close");
    }
    setfirst(!opd);
  }
  return (
    <>
      <button onClick={Open}>{opd ? "open" : "close"}</button>
    </>
  );
}
export default Openform;
