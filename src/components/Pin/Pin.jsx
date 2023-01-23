import React, { useState } from "react";
import pin from "../../pin.svg";
import cross from "../../cross.svg";
import ReadPopup from "../ReadPopup/ReadPopup";
import "./Pin.css";

const Pin = ({ id, x, y, comment, reactions }) => {
  const [showComment, setShowComment] = useState(false);

  return (
    <div
      className="pin"
      onClick={(e) => {
        if (
          e.target.className === "comment" ||
          e.target.className === "img-pin"
        ) {
          setShowComment(!showComment);
        }
      }}
      style={{
        left: x,
        top: y,
      }}
    >
      {showComment ? (
        <img className="img-pin" src={cross} alt="pin" width={20} height={20} />
      ) : (
        <img className="img-pin" src={pin} alt="pin" width={20} height={20} />
      )}
      {showComment && (
        <ReadPopup id={id} comment={comment} reactions={reactions} />
      )}
    </div>
  );
};

export default Pin;
