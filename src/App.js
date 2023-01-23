import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import AddPopup from "./components/AddPopup/AddPopup";
import Pin from "./components/Pin/Pin";

const App = () => {
  const [pins, setPins] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupCoordinates, setPopupCoordinates] = useState({ x: 0, y: 0 });

  const pinsLength = localStorage.getItem("pins")
    ? localStorage.getItem("pins").length
    : 0;

  useEffect(() => {
    const existingPins = JSON.parse(localStorage.getItem("pins")) || [];
    setPins(existingPins);
  }, [pinsLength]);

  const handleClick = (event) => {
    if (event.target.className === "App-header") {
      setShowPopup((prev) => !prev);
      setPopupCoordinates({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <div
      className="App"
      onClick={(event) => {
        if (event.target.className !== "App") {
          handleClick(event);
        }
      }}
    >
      {showPopup && (
        <AddPopup
          x={popupCoordinates.x}
          y={popupCoordinates.y}
          closePopup={() => setShowPopup(false)}
        />
      )}
      {pins.map((pin) => (
        <Pin
          key={pin.id}
          id={pin.id}
          x={pin.x}
          y={pin.y}
          comment={pin.comment}
          reactions={pin.reactions || []}
        />
      ))}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
