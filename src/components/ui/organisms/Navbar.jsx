import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsX, BsChevronRight } from "react-icons/bs";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const handleLogout = () => {
    setTimeout(() => {
      setIsLoggedIn(!isLoggedIn);
    }, 800);
  };

  return (
    <>
      <div className="flex justify-between m-2 h-9">
        <Link to="/">
          <img className="h-full p-2" src="./images/Logo.png" alt="MOIDA" />
        </Link>

        <FaBars className="mx-3 h-full" onClick={showSidebar} />
      </div>

      <hr className="" />

      <nav className={sidebar ? "nav-menu active z-50 nav-shadow" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="flex w-full h-12 justify-end items-center">
            <BsX onClick={showSidebar} className="mr-3 mt-2 text-3xl" />
          </li>

          <div className="m-8 mt-16">
            {isLoggedIn ? (
              <>
                <h1 className="mt-8 text-xl font-bold">
                  <span className="text-blue-400">오구오구 </span>님
                  <br />
                  반가워요!
                </h1>
                <p className="mt-4 mb-8 text-gray-500 text-sm">
                  moida@gmail.com
                </p>
              </>
            ) : (
              <>
                <img
                  className="mt-8 w-12"
                  src="images/LogoIcon.png"
                  alt="MOIDA"
                />
                <p className="mt-4 mb-8 text-gray-500 text-sm">
                  <span className="font-bold">로그인</span>하시면 모이다를
                  <br />
                  편리하게 이용하실 수 있어요!
                </p>
              </>
            )}

            <Link
              to="/create"
              className="p-3 flex border bg-moida border-moida rounded-md text-white font-medium"
            >
              <span className="mx-3">+</span> 새로운 모임 만들기
            </Link>
          </div>

          <hr className="m-8" />
          {isLoggedIn ? (
            <>
              <li className="mx-8 my-6" onClick={showSidebar}>
                <Link to="/join">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">모임 관리</p>
                    <BsChevronRight />
                  </div>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="mx-8 my-6" onClick={showSidebar}>
                <Link to="/login">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">로그인</p>
                    <BsChevronRight />
                  </div>
                </Link>
              </li>

              <li className="mx-8 my-6" onClick={showSidebar}>
                <Link to="/join">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">회원가입</p>
                    <BsChevronRight />
                  </div>
                </Link>
              </li>
            </>
          )}

          <hr className="m-8" />

          <p className="mx-8 text-xs text-gray-400 font-light">고객센터</p>

          <li className="mx-8 my-6" onClick={showSidebar}>
            <Link to="/guide">
              <div className="flex justify-between items-center">
                <p className="font-medium">이용 방법</p>
                <BsChevronRight />
              </div>
            </Link>
          </li>

          <li className="mx-8 my-6" onClick={showSidebar}>
            <Link to="/feedback">
              <div className="flex justify-between items-center">
                <p className="font-medium">피드백</p>
                <BsChevronRight />
              </div>
            </Link>
          </li>

          <li className="mx-8 my-6" onClick={showSidebar}>
            <Link to="/">
              <div className="flex justify-between items-center">
                <p className="font-medium">이용약관</p>
                <BsChevronRight />
              </div>
            </Link>
          </li>
          {isLoggedIn && (
            <p
              onClick={handleLogout}
              className="mx-8 cursor-pointer mt-28 text-sm text-gray-500 underline"
            >
              로그아웃
            </p>
          )}
          {/* <Link to="/profile" onClick={showSidebar}>
            <div className="m-8 mt-16">
              <h1 className="mt-8 text-2xl font-bold font-">
                <span className="text-blue-400">경훈</span> 님
                <br />
                반가워요!
              </h1>

              <p className="mt-4 mb-8 text-gray-500">moida@gmail.com</p>

              <Link
                to="#"
                className="p-3 flex border border-blue-400 rounded-md text-blue-400 font-medium"
              >
                <span className="mx-3">+</span> 새로운 모임 만들기
              </Link>
            </div>
          </Link>

          <hr className="m-8" />

          <li className="m-8" onClick={showSidebar}>
            <Link to="/">
              <div className="flex justify-between items-center">
                <p className="font-medium">모임 관리</p>
                <BsChevronRight />
              </div>
            </Link>
          </li>

          <hr className="m-8" />

          <p className="mx-8 text-xs text-gray-400 font-light">고객센터</p>

          <li className="mx-8 my-6" onClick={showSidebar}>
            <Link to="/">
              <div className="flex justify-between items-center">
                <p className="font-medium">이용 방법</p>
                <BsChevronRight />
              </div>
            </Link>
          </li>

          <li className="mx-8 my-6" onClick={showSidebar}>
            <Link to="/">
              <div className="flex justify-between items-center">
                <p className="font-medium">피드백</p>
                <BsChevronRight />
              </div>
            </Link>
          </li>

          <li className="mx-8 my-6" onClick={showSidebar}>
            <Link to="/">
              <div className="flex justify-between items-center">
                <p className="font-medium">이용약관</p>
                <BsChevronRight />
              </div>
            </Link>
          </li>

          <p className="mx-8 mt-28 text-sm text-gray-500 underline">로그아웃</p> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
