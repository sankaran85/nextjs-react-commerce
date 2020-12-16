import React, { useEffect } from "react";
const ExportredTitle = () => {
  console.log("---------loading remote component new---------");
  useEffect(() => {
    console.log("HOOKS WORKS");
  }, []);

  function  hey() {
    alert('hey im alaert')
  }
  return (
    <div className="hero">
      <h1 className="title">
        {" "}
        This came fom <code>next1</code> !!!
      </h1>
      <p className="description" onClick={hey}>And it works like a charm v2</p>
    </div>
  );
};

export default ExportredTitle;
