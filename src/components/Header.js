import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] sm:h-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row xl:justify-start lg:flex-grow justify-between items-center xl:pt-6 xl:gap-y-6 ">
          <Link href={"/"}>
            <Image
              src={"/logo (2).png"}
              width={160}
              height={170}
              alt="logo-img"
              quality={90}
              priority={true}
            />
          </Link>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
