import React from "react";

function BottomButton(props) {
  const { onClick, children } = props;
  return (
    <button
      className="flex justify-center items-center fixed bottom-0 left-0 text-center text-white h-16 w-screen bg-moida"
      onClick={onClick}
    >
      <span className="flex justify-center items-center">{children}</span>
    </button>
  );
}

export default BottomButton;
