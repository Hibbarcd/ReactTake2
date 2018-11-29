import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, width: 500, clear: "both", paddingTop: 50, position: "relative", textAlign: "center",  }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
