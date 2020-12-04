import React from "react";
import pic from "../pexels-profile.jpg";
import "./Profile.css";

export default function Profile(props) {
  return (
    <div className="profile">
      <figure>
        <img src={pic} alt="mypic" width="200" />
      </figure>
      <h1>John Doe</h1>
      <h3>CEO of Nothing</h3>
      <p>Erat nunc facilisis hendrerit enim elit congue.</p>
      <button className="closeBtn" onClick={props.close}>
        Close
      </button>
    </div>
  );
}
