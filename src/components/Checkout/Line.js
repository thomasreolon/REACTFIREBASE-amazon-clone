import React from "react";
import reducer from "../../constants/reducer";

function Line(props) {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "5px",
        marginBottom: "5px",
        height: "1px",
        backgroundColor: "red",
        marginLeft: "auto",
        marginRight: "auto",
        border: "1px lightgrey solid",
      }}
    ></div>
  );
}

export default Line;
