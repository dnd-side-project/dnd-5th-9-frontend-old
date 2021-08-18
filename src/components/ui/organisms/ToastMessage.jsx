import React from "react";

const ToastMessage = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-10 text-xl bg-blue-100 flex items-center justify-center transition-all ease-linear duration-700">
      <h3>복사되었습니다!</h3>
    </div>
  );
};
export default ToastMessage;
