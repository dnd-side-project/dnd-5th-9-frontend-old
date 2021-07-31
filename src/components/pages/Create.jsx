import React, { useState } from "react";
import Create1 from "./Create1";
import Create2 from "./Create2";

const Create = () => {
  const [page, setPage] = useState("");

  return (
    <div className="">
      <button onClick={() => setPage(Create1)}>Create1</button>
      <button onClick={() => setPage(Create2)}>Create2</button>

      {/*children 을 사용하여 버튼으로 지정된 컴포넌트를 받아옴.*/}
      <div children={page} />
    </div>
  );
};

export default Create;
