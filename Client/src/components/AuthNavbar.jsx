import { Link, useNavigate } from "react-router-dom";

const AuthNavbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="bg-primary text-on-primary p-4 flex justify-between items-center">
      <h1 className="font-bold">Learn Together</h1>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm">{user.username ? user.username.charAt(0).toUpperCase() + user.username.slice(1) : ""}</span>
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm text-white underline"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white hover:text-slate-100">Login</Link>
            <Link to="/register" className="text-white hover:text-slate-100">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthNavbar;
