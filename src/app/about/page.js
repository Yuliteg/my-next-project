import React from "react";
import AbsoluteImage from "@/components/AbsoluteImage";

const About = () => {
  return (
    <div className="h-full">
      <AbsoluteImage
        imageSrc="/circle.png"
        width={230}
        height={230}
        className="xl:bottom-[-80px] sm:bottom-[-30px] right-[1%]"
      />
      <div className="container mx-auto h-full flex flex-col items-center">
        <div>Text</div>
        <div>About</div>
      </div>
    </div>
  );
};

export default About;
