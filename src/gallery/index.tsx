import React from "react";
import "./style.css";
import galleryConfig from "./config";

export const Gallery = () => {
  return (
    <>
      {galleryConfig.map((elem, ind) => (
        <div
          key={ind}
          data-lazy="true"
          data-src={elem.background}
          className="galleryImg"
        ></div>
      ))}
    </>
  );
};
