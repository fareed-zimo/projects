import axios from "axios";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/router";
import useAuth from "@/lib/useAuth";
import useStatus from "@/lib/useStatus";
import GitHubButton from "@/components/GithubButton";

axios.defaults.withCredentials = true;

export default function Login() {
  const [email, setEmail] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const { setLoggedIn } = useStatus();

  const router = useRouter();

  const { setAuth } = useAuth();

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      const decoded = jwtDecode(res.data.token);
      setAuth(decoded);
      setLoggedIn(true);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex w-full h-[100vh] justify-center items-center flex-col space-y-3">
      <div className="space-x-2">
        <label>Email/Username: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="space-x-2">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        className="border-2 border-black px-2 py-1 rounded-lg"
        onClick={handleSubmit}
      >
        Login
      </button>

      <GitHubButton />
    </div>
  );
}
