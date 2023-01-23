import React, { useState } from "react";
import "./ReadPopup.css";

const ReadPopup = ({ id, comment, reactions }) => {
  const [newReaction, setNewReaction] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReaction) return;
    // get the existing popups from localstorage
    const existingPopups = JSON.parse(localStorage.getItem("pins")) || [];
    // find the popup with the matching id
    const popupIndex = existingPopups.findIndex((popup) => popup.id === id);
    // add the new reaction to the reactions array
    existingPopups[popupIndex].reactions.push(newReaction);
    // save the new array of popups in the local storage
    localStorage.setItem("pins", JSON.stringify(existingPopups));
    setNewReaction("");
  };

  return (
    <div className="read-popup">
      <div className="comment">
        <strong>Comment: </strong>
        {comment}
      </div>
      <div className="reactions">
        <ul>
          <strong>Reactions: </strong>
          {reactions.map((reaction, index) => (
            <li key={index}>{reaction}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newReaction}
          onChange={(e) => setNewReaction(e.target.value)}
          placeholder="Add a reaction"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ReadPopup;
