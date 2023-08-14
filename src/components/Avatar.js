import Image from "next/legacy/image";

const Avatar = () => {
  return (
    <div className="absolute hidden xl:flex xl:max-w-none z-10">
      <Image
        src={"/assets/mainImg1.png"}
        alt="avatar-img"
        width={800}
        height={800}
        unoptimized={true}
        loading="eager"
      />
    </div>
  );
};

export default Avatar;
