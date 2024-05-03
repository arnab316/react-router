import { Outlet, useParams } from "react-router-dom";
const About = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2 className="text-center text-red-800 text-2xl">About Components</h2>
      <h2>This is a ......{params.id}</h2>

      <Outlet />
    </div>
  );
};

export default About;
