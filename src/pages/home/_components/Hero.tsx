import React, { useEffect } from "react";
import { tsParticles } from "tsparticles";
import "./Hero.scss";

const HeroComponent = () => {
  useEffect(() => {
    tsParticles.loadJSON("hero-particle", "/particles-config.json").then();
  });
  return (
    <section id="hero">
      <div id="hero-particle" />
      <div className="title">
        <div>
          Hi, I&apos;m <span className="name">Oyster Lee</span>
        </div>
        <div>I&apos;m a Full-Stack Web Developer</div>
      </div>
      <div className="sm-title">
        <div>
          <div>Hi, I&apos;m</div>
          <div className="name">Oyster Lee</div>
        </div>
        <div>I&apos;m a Full-Stack Web Developer</div>
      </div>
      <div className="magic-mouse">
        <div className="mouse" />
        <p>Scroll</p>
      </div>
    </section>
  );
};

export default HeroComponent;
