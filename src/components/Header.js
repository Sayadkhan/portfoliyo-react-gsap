import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useRef } from "react";
import {
  useBoxAnimation,
  useLineForward,
  useLinkDownfall,
  useTextUpward,
} from "../hooks/gsap";

// link ref
const Header = () => {
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);

  const linkArr = [link1, link2, link3, link4];

  useLinkDownfall(linkArr);

  // line ref

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);

  const lineArr = [line1, line2, line3, line4, line5];

  useLineForward(lineArr);

  // text ref
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const text5 = useRef(null);
  const text6 = useRef(null);
  const text7 = useRef(null);

  const textArr = [text1, text2, text3, text4, text5, text6, text7];

  useTextUpward(textArr);

  // box ref
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  const boxArr = [box1, box2, box3];

  useBoxAnimation(boxArr);

  return (
    <div className="header container">
      <div className="row">
        <h2 ref={text1}>
          Abdu<span>ll</span>ah
        </h2>
        <h2 ref={text2}>
          A<span>l</span>
        </h2>
        <h2 ref={text3}>
          Sa<span>y</span>ad
        </h2>
      </div>

      <hr ref={line1} />

      <div className="row">
        <span ref={link1}>Web Developer</span>
        <a
          ref={link2}
          href="https://www.google.com"
          target="-blank"
          rel="noreferrer"
        >
          View Resume
        </a>
        <a
          ref={link3}
          href="mailto:abdullahalsayad03@gmail.com"
          target="-blank"
          rel="noreferrer"
        >
          Send Email
        </a>

        <Link ref={link4} to="/contact">
          Contact Me
        </Link>
      </div>

      <hr ref={line2} />

      <div className="row">
        <Link to="/about" className="box about" ref={box1}>
          <span>About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2 ref={text4}>Aspiring</h2>
        <Link to="/projects" className="box projects" ref={box2}>
          <span>Projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr ref={line3} />

      <div className="row">
        <h2 ref={text5}>
          Web Dev<span>el</span>oper
        </h2>
      </div>
      <hr ref={line4} />
      <div className="row">
        <h2 ref={text6}>Based</h2>
        <Link to="/skils" className="box skills" ref={box3}>
          <span>skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2 ref={text7}>In Bangladesh</h2>
      </div>

      <hr ref={line5} />
    </div>
  );
};

export default Header;
