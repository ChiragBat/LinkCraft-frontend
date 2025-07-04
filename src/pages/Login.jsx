import { useState } from "react";
import { loginUser } from "../api/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form);
      localStorage.setItem("token", data.token);
      console.log("Logged in", data);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="font-space-mono flex justify-center items-center p-2 bg-black text-white w-screen h-screen">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="p-2 rounded-xl border-2"
          type="text"
          placeholder="Enter your username"
          value={form.username}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <input
          className="p-2 rounded-xl border-2"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button className="bg-pink-600 rounded-xl" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
