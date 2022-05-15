import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 style={{
          display: "flex",
          justifyContent: "center",
          }}>Home!</h1>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link style={{ margin: "10px" }} to="/">
          home
        </Link>
        <Link style={{ margin: "10px" }} to="/pricing">
          pricing
        </Link>
        <Link style={{ margin: "10px" }} to="/about">
          about
        </Link>
      </nav>
      <Outlet />
      <p>
        Elit tempor id adipisicing officia irure veniam eu veniam eu ullamco
        consectetur ea minim sunt. Occaecat elit labore quis laboris
        reprehenderit consectetur nulla dolor occaecat aliquip consectetur qui
        nisi. Qui irure consequat dolore labore. Incididunt cillum irure do id
        nisi sint ut ullamco. Officia consectetur officia est tempor voluptate
        aliquip in labore aute. In occaecat anim irure aliqua. Culpa non
        incididunt non do adipisicing elit et mollit elit adipisicing laboris ad
        sunt.
      </p>
      
    </div>
  );
}

export default App;
