import React from "react";

const Title = ({ mainText, accentText, showExploreText }) => {
  return (
    <h1 className="h1 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      {mainText}{" "}
      {accentText && <span className="text-accent">{accentText}</span>}
      {showExploreText && <br />}
      {showExploreText && "Explore my work and projects"}
    </h1>
  );
};

export default Title;
