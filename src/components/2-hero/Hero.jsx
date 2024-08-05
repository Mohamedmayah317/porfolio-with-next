"use client"
import Image from "next/image";
import "./hero.css";
import myAnim from "../../../public/animation/anim.json";
import Lottie from "lottie-react";

function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar">
          <Image
           src="/me.png"
           width={100}
           height={100}
            alt="mohamed mayah" />
          <span className="icon-verified"></span>
        </div>
        <div>
          <h1>Software designer,Founder and amature astronut.</h1>
          <p>I am Mohamed Mayah ,Software designer</p>
        </div>
        <div className="icons flex ">
          <div className="icon-x"></div>
          <div className="icon-facebook"></div>
          <div className="icon-github"></div>
          <div className="icon-linkedin"></div>
          <div className="icon-instagram"></div>
        </div>
      </div>
      <div className="right-section animation">
        {" "}
        <Lottie
          style={{ height: 700, marginLeft: 200 }}
          animationData={myAnim}
        />
      </div>
    </section>
  );
}

export default Hero;
