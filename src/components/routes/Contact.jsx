import { Link, useOutletContext } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { contact } from "../../utills";

// export async function loader() {
//   const contact = await contact;
//   return { contact };
// }

export default function Contact() {
  const context = useOutletContext();

  const { avatar, first, last, notes } = contact;
  // const { avatar, first, last, notes } = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="rounded-full w-20 h-20 overflow-hidden mb-4">
        <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
      </div>
      <div className="text-center">
        <h1 className="text-lg font-bold">
          {first} {last}
        </h1>
        <p className="text-sm text-gray-500">
          {" "}
          <Link className="flex" to={contact.twitter}>
            <FaSquareXTwitter /> My X handle
          </Link>
        </p>
        <p className="text-md">{notes}</p>
        <p>{context.name}</p>
      </div>
    </div>
  );
}
