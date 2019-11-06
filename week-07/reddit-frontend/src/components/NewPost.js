import React from "react";

const NewPost = () => {
  return (
    <div className="Body">
      <form className="form">
        <button className="submit">SUBMIT A NEW POST</button>
        <br />
        <input type="text" name="title" placeholder="Title" />
        <br />
        <input type="text" name="url" placeholder="URL" />
      </form>
    </div>
  );
};

export default NewPost;
