import React from "react";
import "./style.css";

import HeartIcon from "../valentines-heart.svg";
import EnvelopeIcon from "../envelope.svg";
import HumanIcon from "../human-resources.svg";
function HoverContainer(props) {
  return (
    <div className="container-fluid card">
      <div className="row card-body ">
        {/* this column contains our img tumbnail */}
        <div className="col-2">
          <img
            src="https://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png"
            className="tumbnail"
          />
        </div>
        {/* img column ends */}
        {/* this column contains the headings and a heart button */}
        <div className="col-7 text-left">
          <h2>Lorem Ipsum Junior</h2>
          <h4 style={{ lineHeight: "0.75", color: "#7cdbab" }}>Beginner</h4>
          <h5 style={{ lineHeight: "0.75", color: "#7cdbab" }}>online</h5>
          <button
            className="heartButton btn btn-light"
            style={{ marginTop: "5px" }}
            onClick={props.thankYou}
          >
            <img src={HeartIcon} className="icon" />
            Thank you 0
          </button>
        </div>
        {/* column ends */}
        {/* this last column contains some headings and 2 links */}
        <div className="col-3">
          <h3>15 </h3>
          <h5>points</h5>
          <a
            href="#"
            className="float-left text-left"
            style={{ marginTop: "20px" }}
            onClick={props.addFriend}
          >
            <img src={HumanIcon} className="icon" /> Add friend
          </a>

          <a
            href="#"
            className="float-left text-left"
            style={{ lineHeight: "0.5" }}
            onClick={props.writeMessage}
          >
            <img src={EnvelopeIcon} className="icon" /> Write a message
          </a>
        </div>
        {/* column end */}
        {/* bonus column for other details */}
        <div className="col-12">
          <p className="float-left " style={{ margin: "5px" }}>
            {" "}
            <b>Age</b>:45
          </p>
          <p className="float-left" style={{ margin: "5px" }}>
            {" "}
            <b>Level</b>:Middle School
          </p>
        </div>
        {/* bonus column ends */}
      </div>
    </div>
  );
}

export default HoverContainer;
