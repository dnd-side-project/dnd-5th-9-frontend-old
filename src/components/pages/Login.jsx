import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="m-4 mt-20">
        <h1 className="mt-8 text-2xl">
          <strong>약속</strong>은 <strong>간편하게</strong>
          <br />
          <strong>모임</strong>은 <strong>한방에</strong>
        </h1>

        <div className="justify-center">
          <div className="mt-8">
            <input
              className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
              name="email"
              placeholder="이메일 아이디"
            />
          </div>

          <div>
            <input
              className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-300 border rounded-lg focus:shadow-outline"
              name="password"
              placeholder="비밀번호"
            />
          </div>

          <div className="grid grid-cols-2">
            <div className="pt-4">
              <label>
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                <span className="pl-2 text-gray-500">아이디 저장</span>
              </label>
            </div>

            <div className="pt-4">
              <label>
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                <span className="pl-2 text-gray-500">로그인 상태 유지</span>
              </label>
            </div>
          </div>

          <Link to="/">
            <div className="pt-24">
              <button
                className="w-full h-12 text-indigo-100 text-xl font-bold transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-600"
                type="submit"
              >
                로그인
              </button>
            </div>
          </Link>

          <nav className="pt-4 flex justify-center">
            <ol class="flex divide-x divide-gray-300">
              <li class="pr-4 text-gray-700">
                <Link to="#">비밀번호 찾기</Link>
              </li>
              <li class="px-4 text-gray-700">
                <Link to="/join">회원가입</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Login;
