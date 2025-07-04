import axios from "axios";
import { useState } from "react";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  const handleHello = async () => {
    try {
      const res = await axios.get("http://localhost:8080/auth/hello");
      setMessage(res.data);
    } catch (err) {
      console.error("Failed to hit /auth/hello", err);
      setMessage("Not authorized or token missing.");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white bg-gray-900 font-space-mono text-xl space-y-4">
      <div>Welcome to LinkCraft Dashboard 🔗</div>
      <button
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleHello}
      >
        Ping /auth/hello
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Dashboard;
