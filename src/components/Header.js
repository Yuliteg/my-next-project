import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "@/libs/data";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] sm:h-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row xl:justify-start lg:flex-grow justify-between items-center xl:pt-6 sm:gap-x-7 xl:gap-y-7 xl:gap-x-7">
          <Link href={"/"}>
            <div
              style={{ position: "relative", width: "100px", height: "100px" }}
            >
              <Image
                src={"/logo (2).png"}
                alt="logo-img"
                layout="fill"
                objectFit="cover"
                priority={true}
                style={{ zIndex: 1 }}
              />
            </div>
          </Link>
          <SocialLinks socialLinks={socialLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
