import { useState } from "react";

export const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleUpClick = () => {
    console.log("uppercase was clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  const handleLoClick = () => {
    console.log("uppercase was clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };

  const clearText = () => {
    setText("");
    props.showAlert("text cleared", "success");
  };

  return (
    <>
      <div
        className="container mt-4"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <div className="container">
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              placeholder="enter text here..."
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#37343a" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText}>
          Clear text
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter((element) => element.length !== 0).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>
          {0.006 *
            text
              .trim()
              .split(" ")
              .filter((element) => element.length !== 0).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above" +
              " to" +
              " preview it" +
              " here"}
        </p>
      </div>
    </>
  );
};