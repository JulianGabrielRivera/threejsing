import { gsap, Power3 } from "gsap";
import { useRef, useEffect } from "react";
const Image = ({ state }) => {
  console.log(state);
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
      x: 850,
      y: 100,
      ease: ease,
      opacity: 0.5,
    });
    tl.to(img2, 1.2, {
      x: -900,
      y: 650,
      ease: ease,
      opacity: 0.5,
    });
    tl.to(img3, 1.2, {
      y: 1250,
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
      {/* <div style={{ background: "black", height: "100%", color: "white" }}> */}
      {state && (
        <>
          <div ref={(el) => (img = el)} className="ivar">
            <h1>Space Between</h1>
          </div>
          <div ref={(el) => (img2 = el)} className="fitnessa"></div>
          <div ref={(el) => (img3 = el)} className="numinous"></div>
        </>
      )}
      {/* </div> */}
    </>
  );
};

export default Image;
