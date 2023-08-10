import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "@/libs/data";

const Header = () => {
  const headerStyle = {
    "@media (min-width: 1280px)": {
      maxWidth: "160px",
      maxHeight: "160px",
      margin: "0 auto",
    },
  };
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] sm:h-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row xl:justify-start lg:flex-grow justify-between items-center xl:pt-6 sm:gap-x-7 xl:gap-y-7 xl:gap-x-7">
          <Link href={"/"}>
            <Image
              src={"/logo (2).png"}
              width={150}
              height={150}
              alt="logo-img"
              quality={90}
              priority={true}
              layout="responsive"
              style={{ maxHeight: 100, maxWidth: 100 }}
            />
          </Link>
          <SocialLinks socialLinks={socialLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
