import React, { useState } from "react";
import Meeting1 from "./Meeting1";
import Meeting2 from "./Meeting2";
import Meeting3 from "./Meeting3";

const Meeting = () => {
  const [page, setPage] = useState("");

  return (
    <div className="">
      <button onClick={() => setPage(Meeting1)}>Meeting1</button>
      <button onClick={() => setPage(Meeting2)}>Meeting2</button>
      <button onClick={() => setPage(Meeting3)}>Meeting3</button>

      {/*children 을 사용하여 버튼으로 지정된 컴포넌트를 받아옴.*/}
      <div children={page} />
    </div>
  );
};

export default Meeting;
