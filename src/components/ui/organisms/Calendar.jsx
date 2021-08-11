import React, { useState } from "react";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { FaAngleLeft, FaAngleRight, FaUndo } from "react-icons/fa";

const Calendar = () => {
  moment.lang("ko", {
    weekdays: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
    weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
  });

  const today = moment();
  const [currentDay, setCurrentDay] = useState(today.clone().startOf("month"));

  const [selectedDate, setSelectedDate] = useState({
    startDate: null,
    endDate: null,
  });

  console.log(selectedDate);

  const startWeek = currentDay.clone().startOf("month").week(); // 이번달 1일이 올해 몇번째 주인가?
  let endWeek = currentDay.clone().endOf("month").week(); // 이번달 마지막날이 올해 몇번째 주인가?
  if (endWeek === 1) {
    // 12월 ~ 1월 처리
    endWeek = 53; // 한 해 주의 마지막
  }

  const updateSelectedDate = (timestamp) => {
    const { startDate } = selectedDate;
    console.log(startDate);

    if (startDate === null) {
      setSelectedDate({ ...selectedDate, startDate: timestamp });
      // setSelectMessage("종료 날짜를 선택해주세요.");
      return;
    }
    // vaildation
    if (startDate > timestamp) {
      handleReset();
      // setSelectMessage("잘못 선택하셨습니다. 시작 날짜를 선택해주세요.");
      return;
    }

    setSelectedDate({ ...selectedDate, endDate: timestamp });
  };

  const handleOnDateClick = (event) => {
    const month = event.target.dataset.month;
    const date = event.target.textContent;
    const year = currentDay.format("YYYY");

    const timestamp = moment(`${year}-${month}-${date}`);

    event.target.classList.add("bg-blue-300");
    updateSelectedDate(timestamp);
  };

  const handleReset = () => {
    setSelectedDate({ startDate: null, endDate: null });
    // setSelectMessage("시작 날짜를 입력해주세요.");
  };

  const handlePrev = () => {
    const prevDate = currentDay.clone().subtract(1, "month");
    if (!currentDay.isSameOrBefore(today.startOf("month"))) {
      setCurrentDay(prevDate);
    }
  };

  const handleNext = () => {
    const nextDate = currentDay.clone().add(1, "month");
    setCurrentDay(nextDate);
  };

  const renderCalendar = () => {
    const calendarElements = [];

    for (let row = startWeek; row <= endWeek; row++) {
      calendarElements.push(
        <div
          className="calender-row flex justify-between text-center"
          key={row}
        >
          {Array(7)
            .fill(0)
            .map((item, index) => {
              const nowRenderDate = currentDay
                .clone()
                .week(row)
                .startOf("week")
                .add(item + index, "day"); // use item (0) for unused var warning

              const isThisMonth =
                nowRenderDate.isSameOrAfter(
                  currentDay.clone().startOf("month")
                ) &&
                nowRenderDate.isSameOrBefore(currentDay.clone().endOf("month"));

              const isDayAfterToday = nowRenderDate.isSameOrAfter(
                today.clone().startOf("day")
              );

              const isSelected =
                selectedDate.endDate &&
                nowRenderDate.isSameOrAfter(selectedDate.startDate) &&
                nowRenderDate.isSameOrBefore(selectedDate.endDate);

              return isThisMonth && isDayAfterToday ? (
                <div
                  key={index}
                  onClick={handleOnDateClick}
                  className={`flex jc justify-center items-center calendar-col w-9 h-9 mb-5 text-sm cursor-pointer ${
                    isSelected
                      ? "bg-moida-green-300 text-white rounded-full"
                      : ""
                  }`}
                  data-month={nowRenderDate.format("M")}
                >
                  {nowRenderDate.format("D")}
                </div>
              ) : (
                <div key={index} className="calendar-col w-9 h-9 null"></div>
              );
            })}
        </div>
      );
    }
    return calendarElements;
  };

  return (
    <div className="calendar-picker">
      <div className="flex justify-between items-center mt-8">
        <FaAngleLeft onClick={handlePrev} className="" />
        <p className="font-bold">{currentDay.format("YYYY년 M월")}</p>
        <FaAngleRight onClick={handleNext} />
      </div>

      <div className="calendar-table mt-12">
        <div className="flex justify-between text-xs">
          {moment.weekdaysShort().map((item, index) => (
            <p className="w-9 h-4 text-center" key={index}>
              {item}
            </p>
          ))}
        </div>

        <hr className="mt-4" />

        <div calendar-main>{renderCalendar()}</div>
      </div>

      {/* {selectedDate.startDate && (
        <div>
          시작 날짜:{moment(selectedDate.startDate).format("YYYY MM월DD일")}
        </div>
      )}
      {selectedDate.endDate && (
        <div>
          종료 날짜:{moment(selectedDate.endDate).format("YYYY MM월DD일")}
        </div>
      )} */}

      {/* {selectedDate.endDate && (
        // 다음 컴포넌트로 이동 props 로 setpage callback 넘겨줘야 함
        <div className="cursor-pointer border-4 border-yellow-300">
          다음으로
        </div>
      )} */}

      {/* <ReactCalendar onChange={setDate} value={date} selectRange={true} /> */}
    </div>
  );
};

export default Calendar;
