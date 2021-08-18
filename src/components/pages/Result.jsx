import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
import BottomButton from "../ui/organisms/BottomButton";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
const Result = (props) => {
  const [meetingInfo, setMeetingInfo] = useState({ a: true });
  const history = useHistory();
  console.log(meetingInfo);

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

          <div className="w-full h-96 bg-white rounded-xl shadow-md">
            <div className="mx-8">
              <div className="flex justify-between items-center pt-12">
                <div className="flex items-center">
                  <p className="text-xl font-bold">{meetingInfo.title}</p>
                  <p className="text-xs mx-2 font-light text-white bg-yellow-400 p-1 px-2 rounded-xl">
                    진행중
                  </p>
                </div>

                <div className="flex ml-2 text-xl"></div>
              </div>
              <hr className="w-full my-4 " />

              <ul>
                <li className="flex  items-center py-4">
                  <FaRegCalendarAlt />
                  <span className="ml-10">8월 2일 월요일 ~ 8월 5일 목요일</span>
                </li>
                <li className="flex  items-center py-4">
                  <BsClock />
                  <span className="ml-10">오후 2:00 ~ 오후 10:00</span>
                </li>
                <li className="flex  items-center py-4">
                  <BsClock />
                  <span className="ml-10">출발 위치: 잠실역</span>
                </li>
              </ul>
              <Link to={`/result/${props.match.params.id}/detail`}>
                <button className="mt-6 border-2 rounded p-3 border-blue-300 text-blue-300 w-full flex justify-center items-center">
                  모임 내용 상세보기
                </button>
              </Link>
            </div>
          </div>
          <Link to={`/result/${props.match.params.id}/detail`}>
            <BottomButton>확인</BottomButton>
          </Link>
        </div>
      </div>
    )
  );
};

export default Result;
