"use client";
import { useEffect, useState } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import Avatar from "@/components/Avatar";
import Image from "next/image";
import Title from "@/components/Title";
import Description from "@/components/Description";
import { descContent } from "@/libs/data";

export default function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div
      className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30
      to-black/10 relative"
    >
      <div
        className="text-center flex flex-col justify-center xl:pt-40
        xl:text-left h-full container mx-auto xl:ml-[5%] xl:mr-2
        "
      >
        <Title
          mainText="Welcome to my"
          accentText="Portfolio"
          showExploreText={true}
        />
        <Description content={descContent} />
        <div className="flex justify-center relative xl:max-w-[576px]">
          <AnimatedButton />
        </div>

        <div className="sm:hidden xl:block w-[800px] h-full absolute right-0 bottom-0">
          <div>
            <Avatar />
          </div>
          <div
            className={`bg-mainImg xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full
            absolute translate-z-0`}
          ></div>
        </div>
      </div>
    </div>
  );
}
