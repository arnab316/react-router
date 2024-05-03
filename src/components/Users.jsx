import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h2>List of users ....</h2>
      <ul>
        <li>
          <Link to="/users/1">user 1</Link>
        </li>
        <li>
          <Link to="/users/2">user 2</Link>
        </li>
        <li>
          <Link to="/users/3">user 3</Link>
        </li>
      </ul>

      <h1 className="text-lg">
        <Link to="/">Back to home </Link>
      </h1>
    </div>
  );
};

export default Users;
