import React from "react";
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
const ThumbsUI = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleClick = (menuType) => {
    setOpenMenu(openMenu === menuType ? null : menuType);
  };
  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "50px" }}>
      {/* Thumbs Up */}
      <div style={{ position: "relative" }}>
        <FaThumbsUp
          size={30}
          style={{ cursor: "pointer", color: "green" }}
          onClick={() => handleClick("up")}
        />
        {openMenu === "up" && (
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: 0,
              background: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <div>Option 1</div>
            <div>Option 2</div>
          </div>
        )}
      </div>

      {/* Thumbs Down */}
      <div style={{ position: "relative" }}>
        <FaThumbsDown
          size={30}
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => handleClick("down")}
        />
        {openMenu === "down" && (
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: 0,
              background: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <div>Option 1</div>
            <div>Option 2</div>
          </div>
        )}
      </div>
    </div>
  );
};
  export default ThumbsUI