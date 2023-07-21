import React from "react";

const ImageComponent = ({ imageSrc }) => {
  return (
    <div className="absolute left-[-10px] top-[-40px] mix-blend-color-dodge z-10 w-[200px] xl:w-[400px">
      <img src={imageSrc} alt="blob-image" />
    </div>
  );
};

export default ImageComponent;
