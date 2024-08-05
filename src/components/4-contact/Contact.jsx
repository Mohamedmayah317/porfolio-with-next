"use client"

import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";
import myAnim from "../../../public/animation/anim.json";

function Contact() {
  const [state, handleSubmit] = useForm("xrgnwjgv");
  if (state.succeeded) {
    return (
      <>
        <h2>Thanks for joining!</h2>
      </>
    );
  }
  return (
    <>
      <section className="contact">
        <h1>
          <span className="icon-envelope-o"></span>Contact Us
        </h1>
        <p>
          contact us for more informations and get notified when i publish
          something
        </p>

        <div className="flex ">
          <form onSubmit={handleSubmit} className="">
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="text">Your Massage</label>
              <textarea required name="message" id="text"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button className="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
          <div className="animation ">
            <Lottie
              style={{ height: 700, marginLeft: 200 }}
              animationData={myAnim}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
