import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../api/authApi";
import Navbar from "../components/Navbar";
import { showError, showSuccess } from "../utils/swal";
import registerImg from "../assets/Images/register.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      showSuccess("Registered", "Account created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      showError("Registration failed", error.response?.data?.message || "Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 max-w-md mx-auto">
        <img src={registerImg} alt="Register" className="w-full h-80 object-cover rounded mb-4" />
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
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded border p-2"
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
          <button className="w-full rounded bg-primary text-on-primary p-2">Register</button>
        </form>
        <p className="mt-4 text-sm text-slate-600">
          Already have an account? <Link to="/login" className="text-brand">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
