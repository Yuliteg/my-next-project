import Image from "next/legacy/image";
import React from "react";

const AbsoluteImage = ({ imageSrc, width, height, className }) => {
  const combinedClassName = `absolute z-10 filter hue-rotate-90 ${
    className || ""
  }`;
  return (
    <div className={combinedClassName}>
      <Image
        src={imageSrc}
        alt="blob-image"
        width={width}
        height={height}
        priority={true}
      />
    </div>
  );
};
export default AbsoluteImage;
