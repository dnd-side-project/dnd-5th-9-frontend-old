import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsX, BsChevronRight } from "react-icons/bs";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="flex justify-between m-2 h-9">
        <Link to="/">
          <img className="h-full p-2" src="images/Logo.png" alt="MOIDA" />
        </Link>

        <FaBars className="m-3" onClick={showSidebar} />
      </div>

      <hr className="mb-4" />

      <nav className={sidebar ? "nav-menu active z-50" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="flex w-full h-12 justify-end items-center">
            <BsX onClick={showSidebar} className="mr-4 mt-3 text-3xl" />
          </li>
          <Link to="/profile" onClick={showSidebar}>
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

          <p className="mx-8 mt-28 text-sm text-gray-500 underline">로그아웃</p>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
