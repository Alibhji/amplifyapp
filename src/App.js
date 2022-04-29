import logo from "./logo.svg";
import "./App.css";
import Webcam from "react-webcam";

const cameraWidth = 720;
const cameraHeight = 720;
const aspectRatio = cameraWidth / cameraHeight;
const videoConstraints = {
  width: {
    min: cameraWidth,
  },
  height: {
    min: cameraHeight,
  },
  aspectRatio,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is created by Ali.bhji</p>
        <Webcam
          videoConstraints={videoConstraints}
          width={cameraWidth}
          height={cameraHeight}
        />
      </header>
    </div>
  );
}

export default App;
