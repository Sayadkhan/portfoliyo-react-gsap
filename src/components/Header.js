import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header container">
      <div className="row">
        <h2>
          Abdu<span>ll</span>ah
        </h2>
        <h2>
          A<span>l</span>
        </h2>
        <h2>
          Sa<span>y</span>ad
        </h2>
      </div>

      <hr />

      <div className="row">
        <span>Web Developer</span>
        <a href="https://www.google.com" target="-blank" rel="noreferrer">
          View Resume
        </a>
        <a
          href="mailto:abdullahalsayad03@gmail.com"
          target="-blank"
          rel="noreferrer"
        >
          Send Email
        </a>

        <Link to="/contact"> Contact Me</Link>
      </div>

      <hr />

      <div className="row">
        <Link to="/about" className="box about">
          <span>About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>Aspiring</h2>
        <Link to="/projects" className="box projects">
          <span>Projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr />

      <div className="row">
        <h2>
          Web Dev<span>el</span>oper
        </h2>
      </div>
      <hr />
      <div className="row">
        <h2>Based</h2>
        <Link to="/skils" className="box skills">
          <span>skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>In Bangladesh</h2>
      </div>

      <hr />
    </div>
  );
};

export default Header;
