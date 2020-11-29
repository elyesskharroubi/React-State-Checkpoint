import React, { useState } from "react";
import "./App.css";
import "./components/Profile.css";
// import pic from "./pexels-profile.jpg"
import Profile from "./components/Profile"

function App() {
  const [profile, setProfile] = useState(true);
  const toggle = () => setProfile(previous => !previous);

  return (
    <div className="App">
      <div className={profile ? "popUp" : ""}>
      <Profile closing={toggle}/>
    </div>
      <button className="homeBtn" onClick={toggle}>SHOW PROFILE</button>
    </div>
  );
}

export default App;
