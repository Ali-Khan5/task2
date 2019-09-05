import React, { Component } from "react";
import "./style.css";
import HoverContainer from '../smallComponents/HoverContainer'
class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hovered:true
    };
  }
  setHover = () => this.setState({ hovered: true });
  cancelHover = () => this.setState({ hovered: false });
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="wrapper">
              <div
                className="navi"
                onMouseOver={this.setHover}
                onMouseOut={this.cancelHover}
              >
                <img
                  className="avatarImg align-top float-left"
                  src="https://i1.wp.com/frenky.id/wp-content/uploads/2018/02/doge-icon.png?ssl=1"
                />
                <h4 className="textMiddle float-left"> Mr. Doge Wowzer</h4>
                <span className="textMiddle float-left online"></span>
              </div>
              {this.state.hovered ? <div className="infoi  ">
              <HoverContainer/>
              </div>
              :null }
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
