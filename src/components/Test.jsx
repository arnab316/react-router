import { useLoaderData } from "react-router-dom";

const Test = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className=" text-center h-screen">
      <h1 className="text-lg font-semibold text-green-500">
        Hellow from test{" "}
      </h1>
    </div>
  );
};

export default Test;
export const loader = () => {
  return {
    firstname: "John",
  };
};
