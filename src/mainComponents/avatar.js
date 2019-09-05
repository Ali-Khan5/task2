import React, { Component } from "react";
import "./style.css";
import HoverContainer from "../smallComponents/HoverContainer";
class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }
  setHover = () => this.setState({ hovered: true });
  cancelHover = () => this.setState({ hovered: false });
  ThankYouButton = () => console.log("thank you button pressed ");
  AddFriendButton = () => console.log("Add friend Button pressed ");
  WriteMessageButton = () => console.log("Write a Message Button pressed ");
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="mainCardContainer">
              {/* main card starts */}
              <div
                className="AvatarBody"
                onMouseOver={this.setHover}
                onClick={this.cancelHover}
              >
                <img
                  className="avatarImg align-top float-left"
                  src="https://i1.wp.com/frenky.id/wp-content/uploads/2018/02/doge-icon.png?ssl=1"
                />
                <h4 className="textMiddle float-left"> Mr. Doge Wowzer</h4>
                <span className="textMiddle float-left online"></span>
              </div>
              {/* main card end */}
              {this.state.hovered ? (
                <div className="HoverCard">
                  <HoverContainer
                    thankYou={this.ThankYouButton}
                    addFriend={this.AddFriendButton}
                    writeMessage={this.WriteMessageButton}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
