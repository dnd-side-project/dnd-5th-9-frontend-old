import React from "react";
import Progress from "../ui/organisms/Progress";
import { Link } from "react-router-dom";

const Join2 = () => {
  return (
    <>
      <Progress done="100" />

      <div className="mt-36 text-center">
        <img
          class="inline-block object-cover w-48 h-48 rounded-full"
          src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg"
          alt="Profile"
        />

        <p className="pt-4 text-2xl text-bold">가입이 완료되었어요🙌</p>

        <p className="pt-8">
          지금 바로
          <br />
          모임을 만들어보세요!
        </p>

        <Link to="/join2">
          <div className="m-4 mt-40">
            <button
              className="w-full h-12 text-indigo-100 text-xl font-bold transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-600"
              type="submit"
            >
              확인
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Join2;
