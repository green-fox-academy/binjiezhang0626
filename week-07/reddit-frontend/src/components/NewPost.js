import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchAddPostAction } from "../actions";

const NewPost = props => {
  const { history, addPost } = props;
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const handleChange = event => {
    event.target.id === "title"
      ? setTitle(event.target.value)
      : setUrl(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    addPost(title, url);
    history.push("/");
  };
  return (
    <div className="Body">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          onChange={handleChange}
          value={title}
        />
        <br />
        <input
          type="text"
          name="url"
          id="url"
          placeholder="URL"
          onChange={handleChange}
          value={url}
        />
        <br />
        <button className="submit">SUBMIT</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: (title, url) => dispatch(fetchAddPostAction(title, url))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);
