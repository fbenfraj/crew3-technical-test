import { useState } from "react";
import "./AddPopup.css";
import { v4 as uuidv4 } from "uuid";

const AddPopup = ({ x, y, closePopup }) => {
  const [comment, setComment] = useState("");

  const handleSave = () => {
    // get the existing popups from localstorage
    const existingPopups = JSON.parse(localStorage.getItem("pins")) || [];
    // create a new popup object with the x, y and comment
    const newPopup = { id: uuidv4(), x, y, comment, reactions: [] };
    // add the new popup to the existing popups
    existingPopups.push(newPopup);
    //save the new array of popups in the local storage
    localStorage.setItem("pins", JSON.stringify(existingPopups));
    closePopup();
  };

  return (
    <div className="popup" style={{ left: x, top: y }}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment..."
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddPopup;
