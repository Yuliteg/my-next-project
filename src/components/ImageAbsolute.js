import React from "react";

const ImageComponent = ({ imageSrc }) => {
  return (
    <div className="absolute left-[-10px] top-[-30px] z-10 w-[80px] xl:w-[130px]">
      <img
        src={imageSrc}
        alt="blob-image"
        style={{ filter: "hue-rotate(100deg)" }}
      />
    </div>
  );
};

export default ImageComponent;
