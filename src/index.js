import React from "react";
import ReactDOM from "react-dom";
import MoviesSearch from "./moviesSearch";
import "./style.css";

const Main = () => {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <MoviesSearch  />
    </div>
  );
} 

ReactDOM.render(<Main />, document.getElementById("root"));
