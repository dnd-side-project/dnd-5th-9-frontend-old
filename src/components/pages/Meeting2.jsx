import React, { useEffect } from "react";
import PlaceSearch from "./../api/PlaceSearch";

// 장소 선택
const Meeting2 = () => {
  // 마운트 될때 사용할수 있도록 useEffect 사용
  useEffect(() => {
    PlaceSearch();
  }, []);

  return (
    <>
      <h1 className="text-2xl">장소선택</h1>

      <div
        id="myMap"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      ></div>
    </>
  );
};

export default Meeting2;
