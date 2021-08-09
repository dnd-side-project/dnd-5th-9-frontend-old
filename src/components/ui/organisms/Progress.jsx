import React, { useState } from "react";

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  return (
    <div className="progress bg-gray-100 h-1">
      <div
        className="bg-blue-500 h-1"
        data-done="70"
        style={{ width: `${done}%` }}
      ></div>
    </div>
  );
};

export default Progress;
