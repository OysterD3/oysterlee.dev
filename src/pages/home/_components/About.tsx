import React from "react";

const AboutSection = () => {
  return (
    <section id="about">
      <h2 className="section-header">
        <span>About</span>
      </h2>
      <div>
        <div className=" md:float-left flex justify-center items-center">
          <img
            className="h-32 w-32 md:h-48 md:w-48 rounded-full p-4"
            src="/oyster.png"
            alt="photo"
          />
        </div>
        <p>
          I love writing code. Ever since I was 13, I use HTML and adobe flash
          to create a website for fun, this passion carried me until today. I am
          a Full-Stack Web Developer with over 3 years of working experience.
        </p>

        <p>
          My specialties include quickly learning new skills and programming
          languages as well as problem-solving. So far several skills under my
          belt. I am enthusiastically exploring any other programming languages,
          frameworks, or principles that I can integrate with my coding.
        </p>

        <p>I am learning hand-drawing at the moment as well...</p>
      </div>
    </section>
  );
};

export default AboutSection;
