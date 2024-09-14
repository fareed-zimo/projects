import axios from "axios";
import { useState } from "react";

const SignUpForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    image: "/placeholder_avatar.png",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (values.password === confirmPassword) {
        await axios.post("/api/saveData", values);
      } else {
        setError("Passwords do not match");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-x-4">
        <input
          type="text"
          value={values.name}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
          required
          placeholder="Name"
          className="outline-none border-2 border-black rounded-sm w-[200px] px-1"
        />
        <input
          type="email"
          value={values.email}
          required
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Email"
          className="outline-none border-2 border-black rounded-sm w-[200px] px-1"
        />
      </div>
      <div className="space-x-4">
        <input
          type="password"
          required
          value={values.password}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Password"
          className="outline-none border-2 border-black rounded-sm w-[200px] px-1"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="outline-none border-2 border-black rounded-sm w-[200px] px-1"
        />
      </div>
      <div className="space-x-4">
        <input
          type="number"
          value={values.phoneNumber}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
          placeholder="Phone Number"
          className="outline-none border-2 border-black rounded-sm w-[200px] px-1"
        />
      </div>
      {error && <div className="text-red-400">{error}</div>}
      <div className="flex justify-end">
        <button
          type="submit"
          className="border-2 border-black px-2 py-1 rounded-md"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
