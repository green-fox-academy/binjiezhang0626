import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchAddPostAction } from "../../actions";

const NewPost = ({ history, addPost }) => {
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
        <h5>Title</h5>
        <textarea
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          onChange={handleChange}
          value={title}
        />
        <h5>Url</h5>
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
