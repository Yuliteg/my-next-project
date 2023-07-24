import AnimatedButton from "@/components/AnimatedButton";
import Avatar from "@/components/Avatar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-full bg-primary/40">
      <div
        className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30
      to-black/10 relative"
      >
        <div
          className="text-center flex flex-col justify-center xl:pt-40
        xl:text-left h-full container mx-auto xl:ml-[5%] xl:mr-2
        "
        >
          <h1 className="h1 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Welcome to my <span class="text-accent">Portfolio</span> <br />
            Explore my work and projects
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mt-5 xl:mb-16 xl:text-lg sm:text-md">
            Here, I share all my completed projects, certificates, and contact
            details. You can explore my diverse range of front-end development
            projects and check out the certifications I've earned. If you'd like
            to get in touch, feel free to reach out to me using the contact
            information.
          </p>
          <div className="flex justify-center relative xl:max-w-[576px]">
            <AnimatedButton />
          </div>

          <div className="sm:hidden xl:block w-[800px] h-full absolute right-0 bottom-0">
            <div
              className="bg-none xl:bg-mainImg xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full
            absolute translate-z-0 mix-blend-lighten
            "
            ></div>
            <div>
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
