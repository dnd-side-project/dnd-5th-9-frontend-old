import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Calendar from "./../ui/organisms/Calendar";
import moment from "moment";
import BottomButton from "../ui/organisms/BottomButton";

const Main = () => {
  const history = useHistory();

  const [selectedDate, setSelectedDate] = useState({
    startDate: null,
    endDate: null,
  });

  const handleSetPage = () => {
    // moment 객체 용량 이슈 , 큰 용량을 가진 데이터는 history.push로 안들어가진다.
    // 백엔드가 원하는 형태로 가공하여 보내야함
    const startDateTimeStamp = selectedDate.startDate.unix();
    const endDateTimeStamp = selectedDate.endDate.unix();
    history.push("/create", { startDateTimeStamp, endDateTimeStamp });
  };

  console.log(selectedDate);

  return (
    <>
      <div className="m-4 mt-20">
        <h1 className="mt-8 text-2xl font-bold">반가워요 👋</h1>
        <h1 className="mt-3 text-2xl font-bold">
          모임이 가능한
          <br />
          날짜를 선택해주세요.
        </h1>
      </div>
      <div className="mt-8 mb-4 border-4 border-gray-100"></div>

      <div className="mx-6">
        <Calendar
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />

        <div className="mt-16 flex justify-center items-center bg-gray-500 h-24 text-center text-white">
          비회원 광고
        </div>
      </div>

      {selectedDate.endDate && (
        <BottomButton onClick={handleSetPage}>선택 완료</BottomButton>
      )}
    </>
  );
};

export default Main;
