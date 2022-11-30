import { gsap, Power3 } from "gsap";
import { useRef, useEffect } from "react";
const Image = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeIn();

  let img = useRef();
  let img2 = useRef();

  let img3 = useRef();
  useEffect(() => {
    // tl.from(img, {
    //   x: -300,

    //   opacity: 0.5,

    //   ease: ease,
    // });
    tl.to(img, 1.2, {
      x: 350,
      ease: ease,
      opacity: 0.5,
    });
    tl.to(img2, 1.2, {
      x: -430,
      ease: ease,
      opacity: 0.5,
    });
    tl.to(img3, 1.2, {
      y: 900,
      x: -900,
      ease: ease,
      opacity: 0.5,
    });
    // tl.to(img2, 1.2, {
    //   x: 350,
    //   ease: ease,
    //   opacity: 0.5,
    // });
  });
  return (
    <>
      <div style={{ background: "black" }}>
        <div ref={(el) => (img = el)} className="ivar"></div>
        <div ref={(el) => (img2 = el)} className="fitnessa"></div>
        <div ref={(el) => (img3 = el)} className="numinous"></div>
      </div>
    </>
  );
};

export default Image;
