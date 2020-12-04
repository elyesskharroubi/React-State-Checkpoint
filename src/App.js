// import React, { useState } from "react";
import "./App.css";
import "./components/Profile.css";
// import pic from "./pexels-profile.jpg"
import Profile from "./components/Profile"

// function App() {
//   const [profile, setProfile] = useState(true);
//   const toggle = () => setProfile(previous => !previous);

//   return (
    
//   );
// }

// export default App;

import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile: false,
    };
    
    
  }
  
  showProfile = () => {
    this.setState({profile: !this.state.profile})
  };

  render() {
    return (
    <div className="App">
      {this.state.profile ? <Profile close={this.showProfile}/> : null}
      <button className="homeBtn" onClick={this.showProfile}>SHOW PROFILE</button>
    </div>
    
    )
  }
}

export default App;
