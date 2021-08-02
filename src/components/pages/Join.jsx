import React from "react";
import Progress from "./../ui/organisms/Progress";

const Join = () => {
  return (
    <>
      <Progress done="30" />
      <div>
        <h1>이메일로 회원가입하기</h1>

        <form action="">
          <div key="">
            <p>
              <label>Username</label>
            </p>
            <p>
              <input name="username" />
            </p>
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Join;
