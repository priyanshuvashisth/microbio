import React from "react";
import "../../Styles/Define.css";

const Define = ({heading,text}) => {
  return (
    <>
      <div className="define-box">
        <p className="text" style={{color:'#1b1325'}}>
          <span className="heading" style={{color:'#1f1135'}}>{heading} : </span>
           {text}
        </p>
      </div>
    </>
  );
};

export default Define;
