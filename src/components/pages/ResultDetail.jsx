import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { FaEllipsisV } from "react-icons/fa";

const ResultDetail = (props) => {
  const [meetingInfo, setMeetingInfo] = useState({ a: true });
  const history = useHistory();
  useEffect(() => {
    const meetingId = props.match.params.id;

    // axios
    //   .get(`/meetings/${meetingId}`)
    //   .then((response) => {
    //     const data = response.data.data;
    //     setMeetingInfo(data.meeting);
    //   })
    //   .catch(() => {
    //     history.push("/");
    //   });
  }, []);

  return (
    meetingInfo && (
      <div className="block w-full h-screen bg-gray-50">
        <div className="mx-8">
          <h1 className="pt-16 text-3xl font-bold mb-16">
            짜잔 ✨
            <br />
            모임 일정 결과를
            <br />
            확인해보세요.
          </h1>
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
                // onClick={handleShareButtonClick}
              />
            </div>
          </div>

          <p className="text-sm font-light text-gray-400 my-2 mx-4">
            dd{meetingInfo.description}
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

        {/* 날짜로 보기  */}
        <div>
          <h2>날짜로 보기 </h2>
        </div>

        {/* 멤버 보기  */}

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
      </div>
    )
  );
};

export default ResultDetail;
