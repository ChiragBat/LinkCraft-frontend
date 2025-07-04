import { useState } from "react";
import { registerUser } from "../api/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      navigate("/login");
      console.log("registered");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="font-space-mono flex justify-center items-center p-2 bg-black text-white w-screen h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          className="p-2 rounded-xl border-2"
          placeholder="Enter username"
          value={form.username}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <input
          type="text"
          className="p-2 rounded-xl border-2"
          placeholder="Enter password"
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button className="bg-pink-600 rounded-xl" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
