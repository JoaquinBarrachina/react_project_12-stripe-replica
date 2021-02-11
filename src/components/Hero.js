import React from "react";
import phoneImg from "../images/phone.svg";

//import custom Hook
import { useGlobalContext } from "../context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae laborum hic eligendi id sint quidem, odio a velit
            placeat dicta repellendus! Odio sunt maxime aliquid similique ullam
          </p>
          <button className="btn">Star Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
