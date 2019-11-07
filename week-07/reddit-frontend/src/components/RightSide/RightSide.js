import React from "react";

const RightSide = props => {
  const { history } = props;
  const handleClick = event => {
    event.preventDefault();
    history.push("/newpost");
  };
  return (
    <div className="RightSide">
      <button onClick={handleClick}>SUBMIT A NEW POST</button>
      <h3>About</h3>
    </div>
  );
};
export default RightSide;
