import Image from "next/legacy/image";
import React from "react";

const ImageComponent = ({ imageSrc }) => {
  return (
    <div
      className="absolute left-[-10px] top-[-45px] z-10"
      style={{ filter: "hue-rotate(100deg)" }}
    >
      <Image
        src={imageSrc}
        alt="blob-image"
        width={130}
        height={130}
        priority={true}
      />
    </div>
  );
};

export default ImageComponent;
