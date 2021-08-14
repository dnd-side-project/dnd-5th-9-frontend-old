import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Create1 from "./Create1";
import Create2 from "./Create2";

const Create = () => {
  const location = useLocation();
  const { startDateTimeStamp, endDateTimeStamp } = location.state;
  console.log(location.state);

  return <div className=""></div>;
};

export default Create;
