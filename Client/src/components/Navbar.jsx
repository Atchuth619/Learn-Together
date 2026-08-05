import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="font-bold">Learn Together</h1>
      <Link to="/add">➕</Link>
    </div>
  );
};

export default Navbar;