import React from 'react';
import './App.css';
import './style.css';
import hey from "./cr7.png";
import ho from "./video.mp4";
function App() {
  return (
    <div className="App">
      
      <h1 className="title">Your Name here </h1>
      <br></br>
      <video className="vid" src=""></video>
      
      <center><img className="image"  src={hey}></img></center>
      <center><video className="video" controls src={ho}></video></center>
    </div>
  );
}

export default App;
