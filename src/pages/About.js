import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link style={{ margin: "10px" }} to="/">
        home
      </Link>
      <h1> This is About page</h1>
      <p>Id eu ipsum voluptate sunt velit.</p>
    </div>
  );
};

export default About;
