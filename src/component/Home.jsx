import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
   const navigate = useNavigate()
  const [input, setInput] = useState();

  const onclickHandler = () => {
   navigate(`/room/${input}`)
  };
  return (
    <div className="home-section">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your name..."
      />
      <button onClick={onclickHandler}>join</button>
    </div>
  );
};
