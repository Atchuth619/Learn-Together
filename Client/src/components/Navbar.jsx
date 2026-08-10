import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold">Learn Together</h1>
      <Link to="/add" className="text-white hover:text-slate-100" aria-label="Add entry">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M12 4.5a.75.75 0 01.75.75v5.25h5.25a.75.75 0 010 1.5H12.75V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V5.25A.75.75 0 0112 4.5z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Navbar;