import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FaEllipsisV,
  FaAngleLeft,
  FaAngleRight,
  FaPencilAlt,
  FaShareAlt,
} from "react-icons/fa";
import { useHistory, useLocation } from "react-router-dom";
import SharePopup from "../ui/organisms/SharePopup";
import ToastMessage from "../ui/organisms/ToastMessage";

const Meeting = (props) => {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const [mode, setMode] = useState(false);
  const [isToastOn, setIsToastOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [meetingInfo, setMeetingInfo] = useState({});
  const history = useHistory();
  console.log(meetingInfo);

  // 일단 먼저 이전페이지에 가져온 데이터로
  // meeting data 는 사실 url param으로  fetch(get) 해와야함
  useEffect(() => {
    const meetingId = props.match.params.id;

    axios
      .get(`/meetings/${meetingId}`)
      .then((response) => {
        const data = response.data.data;
        setMeetingInfo(data.meeting);
      })
      .catch(() => {
        history.push("/");
      });
    return () => console.log("clean");
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(`/meetings/${meetingId}`);
    //     console.log(response);
    //     return response.data.data;
    //   } catch (error) {
    //     error = true;
    //     return;
    //   }
    // };
    // // 있는 url 이면 데이터로 만들기
    // if (error) {
    //   history.push("/");
    //   return;
    // }
    // fetchData().then((data) => {
    //   console.log(data);
    //   setMeetingInfo(data.meeting);
    // });
  }, []);

  // to do meeting id 로 모임 정보 가져와서 뿌려주기
  // meeting id 가 유효하지 않으면 홈페이지로 보내버리기

  const handleShareButtonClick = () => {
    setIsOpen(true);
  };
  const handleCloseButtonClick = () => {
    setIsOpen(false);
  };
  const handleToast = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsToastOn(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsToastOn(false);
    }, 1000);
  }, [isToastOn]);

  const onDown = (e) => {
    e.preventDefault();

    setClick(true);

    if (e.target.classList.contains("bg-moida-green-100")) {
      setMode(false);
    } else {
      setMode(true);
    }

    if (e.target.classList.contains("block")) {
      if (e.target.classList.contains("bg-moida-green-100")) {
        e.target.classList.remove("bg-moida-green-100");
        e.target.classList.add("bg-moida-green-200");
      } else {
        e.target.classList.remove("bg-moida-green-200");
        e.target.classList.add("bg-moida-green-100");
      }
    }
  };

  const onUp = (e) => {
    e.preventDefault();

    setClick(false);

    // if (e.target.classList.contains("block")) {
    //   if (e.target.classList.contains("bg-moida-green-100")) {
    //     e.target.classList.remove("bg-moida-green-100");
    //     e.target.classList.add("bg-moida-green-200");
    //   } else {
    //     e.target.classList.remove("bg-moida-green-200");
    //     e.target.classList.add("bg-moida-green-100");
    //   }
    // }
  };

  const onMove = (e) => {
    e.preventDefault();

    if (click && e.target.classList.contains("block")) {
      if (mode === false && e.target.classList.contains("bg-moida-green-100")) {
        e.target.classList.remove("bg-moida-green-100");
        e.target.classList.add("bg-moida-green-200");
      } else if (
        mode === true &&
        e.target.classList.contains("bg-moida-green-200")
      ) {
        e.target.classList.remove("bg-moida-green-200");
        e.target.classList.add("bg-moida-green-100");
      }
    }
  };

  return (
    meetingInfo && (
      <>
        <div className="m-4 mt-20">
          <h1 className="mt-8 text-2xl font-bold">
            모임이 가능한 시간을
            <br />
            추가해주세요.
          </h1>
          <p className="text-gray-400 text-sm mt-3 font-light">
            <span className="text-red-400 mr-2 font-medium">TIP</span>
            가능한 시간에 드래그해서 시간을 추가해주세요!
          </p>
        </div>

        <div className="sticky top-0 bg-white">
          <hr className="my-8" />

          <div className="flex justify-between items-center mx-4">
            <div className="flex items-center">
              <p className="text-xl font-bold">{meetingInfo.title}</p>
              <p className="text-xs mx-2 font-light text-white bg-yellow-400 p-1 px-2 rounded-xl">
                진행중
              </p>
            </div>
            <div className="flex ml-2 text-xl">
              <FaEllipsisV
                className="cursor-pointer"
                onClick={handleShareButtonClick}
              />
            </div>
          </div>

          <p className="text-sm font-light text-gray-400 my-2 mx-4">
            {meetingInfo.description}
          </p>

          <div className="mt-8 mb-4 border-4 border-gray-100"></div>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <p className="text-center text-gray-300">text</p>
            <hr className="mt-4 border" />
          </div>

          <div>
            <p className="text-center text-blue-400">text</p>
            <hr className="mt-4 border -blue-400 border-blue-400" />
          </div>
        </div>

        <div className="mx-6">
          <div className="flex justify-between items-center mt-8">
            <FaAngleLeft />
            <p className="font-bold">2021년 7월</p>
            <FaAngleRight />
          </div>

          {isOpen && (
            <SharePopup
              onClose={handleCloseButtonClick}
              onToastStart={handleToast}
            />
          )}
          {isToastOn && <ToastMessage />}

          {/* 시간표 */}
          <div
            className="grid grid-cols-8 mt-8 time-table"
            onMouseMove={onMove}
            onMouseUp={onUp}
            onMouseDown={onDown}
          >
            <div className="-ml-2">
              <div className="h-12 -mb-3"></div>
              <p className="h-14-5 text-left text-2xs align-top text-gray-400 font-light">
                오전 9시
              </p>
              <p className="h-14-5 text-left text-2xs align-top text-gray-400 font-light">
                오전 10시
              </p>
              <p className="h-14-5 text-left text-2xs align-top text-gray-400 font-light">
                오전 11시
              </p>
              <p className="h-14-5 text-left text-2xs align-top text-gray-400 font-light">
                오후 12시
              </p>
              <p className="h-14-5 text-left text-2xs align-top text-gray-400 font-light">
                오후 1시
              </p>
              <p className="h-14-5 text-left text-2xs align-top text-gray-400 font-light">
                오후 2시
              </p>
              <p className="h-14-5 text-left text-2xs align-top text-gray-400 font-light">
                오후 3시
              </p>
              <p className="h-14-5 text-left text-2xs align-top text-gray-400 font-light">
                오후 4시
              </p>
              <p className="h-14-5 text-left text-2xs align-top text-gray-400 font-light">
                오후 5시
              </p>
            </div>

            <div className="col-span-7">
              <div className="grid grid-cols-4 text-center mb-2">
                <div>
                  <p className="text-2xs text-gray-400">월요일</p>
                  <p className="text-sm">11</p>
                </div>
                <div>
                  <p className="text-2xs text-gray-400">화요일</p>
                  <p className="text-sm">12</p>
                </div>
                <div>
                  <p className="text-2xs text-gray-400">수요일</p>
                  <p className="text-sm">13</p>
                </div>
                <div>
                  <p className="text-2xs text-gray-400">목요일</p>
                  <p className="text-sm">14</p>
                </div>
              </div>

              <div className="flex border-t pt-1">
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
              </div>
              <div className="flex pb-1">
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
              </div>

              <div className="flex border-t pt-1">
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
              </div>
              <div className="flex pb-1">
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
              </div>

              <div className="flex border-t pt-1">
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
              </div>
              <div className="flex pb-1">
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
              </div>

              <div className="flex border-t pt-1">
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
              </div>
              <div className="flex pb-1">
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
              </div>

              <div className="flex border-t pt-1">
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
              </div>
              <div className="flex pb-1">
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
              </div>

              <div className="flex border-t pt-1">
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
              </div>
              <div className="flex pb-1">
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
              </div>

              <div className="flex border-t pt-1">
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
              </div>
              <div className="flex pb-1">
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
              </div>

              <div className="flex border-t pt-1">
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-100 rounded-t-sm block"></div>
              </div>
              <div className="flex pb-1 border-b">
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
                <div className="w-full h-6 mr-1 bg-moida-green-200 rounded-b-sm block"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="flex justify-center items-center text-sm p-2 border border-gray-300 rounded-full text-gray-400 px-4">
            <FaPencilAlt className="mr-2" />
            시간 수정하기
          </button>
        </div>

        <div className="mt-8 mb-4 border-4 border-gray-100"></div>

        <div className="m-4 mt-4">
          <h2 className="mt-8 text-lg font-bold">
            참석 멤버 <span className="font-normal">(6명 참여)</span>
          </h2>

          <div className="mt-4 p-4 w-full shadow-2xl rounded-xl">
            <div className="grid grid-cols-2">
              <div className="ml-4">
                <h3 className="my-6 font-bold">
                  가능해요 <span className="text-green-500">4</span>
                </h3>
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-red-200 w-8 h-8 mr-2 rounded-full">
                    😺
                  </div>
                  <div className="h-4 w-4 -ml-5 -mb-4 rounded-full bg-moida"></div>
                  <p className="ml-1 font-bold">소석진 (나)</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-yellow-200 w-8 h-8 mr-2 rounded-full">
                    🎀
                  </div>
                  <p>하영이</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-yellow-300 w-8 h-8 mr-2 rounded-full">
                    ⚽
                  </div>
                  <p>경후니</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-green-200 w-8 h-8 mr-2 rounded-full">
                    🍩
                  </div>
                  <p>이혀니</p>
                </div>
              </div>

              <div className="ml-4">
                <h3 className="my-6 font-bold">
                  불가능해요 <span className="text-red-500">2</span>
                </h3>
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-blue-300 w-8 h-8 mr-2 rounded-full">
                    🌹
                  </div>
                  <p>람이</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-indigo-400 w-8 h-8 mr-2 rounded-full">
                    🥑
                  </div>
                  <p>서하서하</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      // <div className="">
      //   <button onClick={() => setPage(Meeting1)}>Meeting1</button>
      //   <button onClick={() => setPage(Meeting2)}>Meeting2</button>
      //   <button onClick={() => setPage(Meeting3)}>Meeting3</button>

      //   {/*children 을 사용하여 버튼으로 지정된 컴포넌트를 받아옴.*/}
      //   <div children={page} />
      // </div>
    )
  );
};

export default Meeting;
