import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/authApi";
import Navbar from "../components/Navbar";
import { showError, showSuccess } from "../utils/swal";
import loginImg from "../assets/Images/login.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      showSuccess("Logged in", "Welcome back!");
      navigate("/");
    } catch (error) {
      console.error(error);
      showError("Login failed", error.response?.data?.message || "Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 max-w-md mx-auto">
        <img src={loginImg} alt="Login" className="w-full h-80 object-cover rounded mb-4" />
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full rounded border p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded border p-2"
              required
            />
          </div>
          <button className="w-full rounded bg-primary text-on-primary p-2">Login</button>
        </form>
        <p className="mt-4 text-sm text-slate-600">
          Don't have an account? <Link to="/register" className="text-brand">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
