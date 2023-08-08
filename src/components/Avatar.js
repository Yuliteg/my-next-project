import Image from "next/image";

const Avatar = () => {
  return (
    <div className="absolute hidden xl:flex xl:max-w-none z-10">
      <Image
        src={"/assets/mainImg1.png"}
        alt="avatar-img"
        className="translate-z-0"
        width={800}
        height={800}
        unoptimized={true}
        priority
        loading="eager"
      />
    </div>
  );
};

export default Avatar;
