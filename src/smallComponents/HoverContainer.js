import React from "react";
import "./style.css";
import HeartIcon from "../valentines-heart.svg"
function HoverContainer() {
  return (
    <div className="container-fluid card">
      <div className="row card-body ">
        <div className="col-2">
          <img
            src="https://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png"
            className="tumbnail"
          />
        </div>
        <div className="col-8 text-left">
          <h2>Lorem Ipsum Junior</h2>
          <h4 style={{lineHeight:'0.75',color:'#7cdbab'}}>Beginner</h4>
          <h5 style={{lineHeight:'0.75',color:'#7cdbab'}}>online</h5>
          <button className="heartButton btn btn-light" style={{marginTop:'5px'}}>
              <img src={HeartIcon} className="icon"/>Thank you 0</button>
          <a href="#" className="float-right text-right" style={{lineHeight:'0.5'}}>
            Add friend
          </a>
          <br />
          <a href="#" className="float-right text-right" style={{lineHeight:'0.5'}}>
            Write a message
          </a>
        </div>
        <div className="col-2">
          <h3>15 </h3>
          <h5>points</h5>
        </div>
        <div className="col-12">
            <p className="float-left "  style={{margin:'5px'}}> <b>Age</b>:45</p>
            <p className="float-left" style={{margin:'5px'}}> <b>Level</b>:Middle School</p>
        </div>
      </div>
    </div>
  );
}

export default HoverContainer;
