import React from "react";
import Calendar from "../ui/organisms/Calendar";

const Create1 = () => {
  return (
    <>
      <div className="m-4 mt-20">
        <h1 className="mt-8 text-2xl font-bold">λ°κ°μμ π</h1>
        <h1 className="mt-3 text-2xl font-bold">
          λͺ¨μμ΄ κ°λ₯ν
          <br />
          λ μ§λ₯Ό μ νν΄μ£ΌμΈμ.
        </h1>
      </div>
      <div className="mt-8 mb-4 border-4 border-gray-100"></div>

      <div className="mx-6">
        <Calendar />

        <div className="mt-16 flex justify-center items-center bg-gray-500 h-24 text-center text-white">
          λΉνμ κ΄κ³ 
        </div>
      </div>
    </>
  );
};

export default Create1;
