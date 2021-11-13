import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="h-screen bg-gray-300 h-full p-24 flex flex-col justify-center items-center">
      <img src={logo} className="w-32" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default App;
