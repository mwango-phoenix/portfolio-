import React from "react";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          Hi, I am a graphic designer, creating mainly posters and novelties
          within organizations at the University of Waterloo. I have been
          working within MathSoc as well as DSC and Lifesaving Club. I'm testing
          the waters with character design, looking to creating unique
          characters for various media, including games, animations, and comics.
        </p>
        <p>
          Feel free to browse through my portfolio and don't hesitate to reach
          out if you'd like to collaborate on a project!
        </p>
      </div>
      <div>
        <Image
          src="/assets/portrait.png"
          alt="Mick Wang"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default AboutPage;
