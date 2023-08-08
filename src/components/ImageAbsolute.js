import Image from "next/image";
import React from "react";

const ImageComponent = ({ imageSrc }) => {
  return (
    <div
      className="absolute left-[-10px] top-[-30px] z-10"
      style={{ filter: "hue-rotate(100deg)" }}
    >
      <Image
        src={imageSrc}
        alt="blob-image"
        width={140}
        height={140}
      />
    </div>
  );
};

export default ImageComponent;
