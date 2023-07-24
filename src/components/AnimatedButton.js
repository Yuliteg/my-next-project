import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const AnimatedButton = () => {
  return (
    <div className="mx-auto xl:m-0 mt-2">
      <Link
        href={"/projects"}
        className="relative w-[185px] h-[185px] flex justify-center items-center 
        bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/assets/circleText.png"}
          width={141}
          height={148}
          alt="circle-text-img"
          className="animate-spin-slow w-full h-full max-w[141] max-h-[178px]"
        />
        <p className="absolute ">My projects</p>
      </Link>
    </div>
  );
};

export default AnimatedButton;
