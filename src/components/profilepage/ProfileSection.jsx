import React, { useState } from "react";
import profilepic from "../../img/tk.jpg";

const ProfileSection = () => {
  const [contactClicked, setContactClicked] = useState(false);

  const handleClick = () => {
    setContactClicked(!contactClicked);
  };

  return (
    <div className="profileWrap">
      <div className="profileContainer">
        <img src={profilepic} className="profilePic" />
        <div className="rightProfile">
          <div className="count">
            <p style={{ fontWeight: "bold", marginLeft: 6, cursor: "pointer" }}>
              11
            </p>
            <p style={{ fontWeight: 500, cursor: "pointer" }}>Posts</p>
          </div>
          <div className="count">
            <p style={{ fontWeight: "bold", marginLeft: 6, cursor: "pointer" }}>
              12.8 k
            </p>
            <p style={{ fontWeight: 500, cursor: "pointer" }}>Followers</p>
          </div>
          <div className="count">
            <p style={{ fontWeight: "bold", marginLeft: 6, cursor: "pointer" }}>
              2,105
            </p>
            <p style={{ fontWeight: 500, cursor: "pointer" }}>Following</p>
          </div>
        </div>
      </div>

      <div className="bio">
        <h1>Tomiwa Kukoyi</h1>
        <p>
          Frontend Developer <br /> Music Pr
        </p>
        <a href="https://www.linkedin.com/in/oluwatomiwakukoyi07">
          linkedin.com/tomiwakukoyi
        </a>
      </div>

      <div className="buttons">
        <button>Edit Profile</button>
        <div>
          <button className="clicked" onClick={handleClick}>
            Contact
          </button>
        </div>
      </div>

      {contactClicked && (
        <div className="contact">
          <p>Email : tomiwakukoyi07@gmail.com</p>
          <p>Phone : +2347083325053</p>
          <a href="https://github.com/tomiwakukoyi">
            Github : Github.com/tomiwakukoyi
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
