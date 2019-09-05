import React from "react";
import AvatarComponent from "./mainComponents/avatar";
import "./App.css";
function App() {
  return (
    <div className="container-fluid text-center">
      <div className="container" style={{ marginTop: "20%" }}>
        <div className="row" style={{ border: "2px solid black" }}>
          <div className="col-12">
            <h2 className="text-center"> welcome to task 2</h2>
            <AvatarComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
