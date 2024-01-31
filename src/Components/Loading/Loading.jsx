import React, { useEffect, useState } from "react";
import "../../App.css";
import animate from "../../Assets/animate.png";
const Loading = () => {
  const [value, setValue] = useState(5);
  useEffect(() => {
    setInterval(() => {
      setValue((oldValue) => oldValue - 1);
    }, 1000);
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4rem",
          alignItems: "center",
          backgroundColor: "#e2daeb",
        }}
      >
        <img
          style={{ height: "150px", width: "150px" }}
          id="animate-img"
          src={animate}
          alt=""
        />
        <div>
          <p className="heading">SUBMITTED BY - </p>
          <ul className="text" style={{ marginLeft: "30px" }}>
            <li>PRIYANSHU VASHISTH</li>
            <li>RAGHAV THAPPAR</li>
            <li>KHUSHI ANEJA</li>
            <li>ISHIKA PAL</li>
            <li>SHASHWAT SINGH</li>
            <li>SAKSHI GUPTA</li>
          </ul>
        </div>
        <p>Loading..{value} seconds</p>
      </div>
    </>
  );
};

export default Loading;
