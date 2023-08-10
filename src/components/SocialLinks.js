import Link from "next/link";
import React from "react";

const SocialLinks = ({ socialLinks }) => {
  return (
    <div className="flex gap-3">
      {socialLinks.map((link) => (
        <Link
          href={link.link}
          key={link.name}
          className="text-xl hover:text-accent transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
