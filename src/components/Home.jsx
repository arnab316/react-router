import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-3xl font-extrabold ">Home Component</div>
      <Link to="/about" className="text-3xl  ">
        <button className=" mt-16">Go to about</button>
      </Link>
      <br />
      <p className="text-md ">
        {" "}
        <Link to="/users">see users</Link>
      </p>
      <p>
        <Link to="/test">Go to Test</Link>
      </p>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
