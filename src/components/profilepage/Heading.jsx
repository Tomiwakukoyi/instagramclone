import React from "react";
import "./ProfilePage.scss";
import { UilPlusSquare, UilBars } from "@iconscout/react-unicons";

const Heading = () => {
  return (
    <div className="heading">
      <h2>the.tommyk</h2>
      <div>
        <UilPlusSquare style={{ marginRight: 10 }} />
        <UilBars />
      </div>
    </div>
  );
};

export default Heading;
