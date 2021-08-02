import React from "react";
import { Link } from "react-router-dom";

const Password2 = () => {
  return (
    <>
      <div className="mt-36 text-center">
        <img
          class="inline-block w-48 h-24"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6nfQpQ9aPlk0tS0rNFhQj31EhOD_EN68Xezm6dwlPR8vCzvkbG6os5FcmVbvX1i1yUE&usqp=CAU"
          alt="Profile"
        />

        <p className="pt-8 text-xl font-bold">
          비밀번호 재설정 메일을
          <br />
          발송했어요!
        </p>

        <p className="pt-8">아래 주소로 발송된 이메일을 확인해주세요.</p>

        <p className="pt-2 text-blue-500 font-bold text-sm">
          5959hitmeup@hotmail.com
        </p>

        <Link to="/password3">
          <div className="m-4 mt-24">
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

export default Password2;
