import axios from "axios";
import { useState } from "react";

const SignUpForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/saveData", values);
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
          placeholder="Name"
          className="outline-none border-2 border-black rounded-sm w-[200px] px-1"
        />
        <input
          type="email"
          value={values.email}
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
          value={values.confirmPassword}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, confirmPassword: e.target.value }))
          }
          className="outline-none border-2 border-black rounded-sm w-[200px] px-1"
        />
      </div>
      <div className="space-x-4">
        <input
          type="text"
          value={values.phoneNumber}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
          placeholder="Phone Number"
          className="outline-none border-2 border-black rounded-sm w-[200px] px-1"
        />
      </div>
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
