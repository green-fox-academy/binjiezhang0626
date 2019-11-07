import React from "react";
import Posts from "../Posts/Posts";
import RightSide from "../RightSide/RightSide";

const Main = props => {
  return (
    <div className="Body">
      <Posts />
      <RightSide history={props.history} />
    </div>
  );
};

export default Main;
