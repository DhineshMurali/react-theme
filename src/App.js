import React from "react";
import "./styles/App.css";
import DarkMode from "./components/DarkMode";
import SearchMovies from "./searchMovies";

function App() {
  return (
    <div className="App">
     
      <h1>Welcome To Movie Search App</h1>
      <DarkMode />
      <div id="container">
      <SearchMovies />
      </div>
    </div>
  );
}

export default App;