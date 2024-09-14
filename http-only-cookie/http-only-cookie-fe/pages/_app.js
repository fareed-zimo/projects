import "@/styles/globals.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

export const AuthContext = createContext({});
export const StatusContext = createContext(false);

export default function App({ Component, session, pageProps }) {
  const [auth, setAuth] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshAuthToken = async () => {
    try {
      const response = await axios.get("http://localhost:4000/refreshToken", {
        withCredentials: true,
      });
      const data = response.data;
      const decoded = jwtDecode(data.token);
      setAuth((prev) => ({ ...prev, ...decoded }));
      setLoggedIn(true);
    } catch (error) {
      setAuth({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!auth.token) {
      refreshAuthToken();
    } else {
      setLoading(false);
    }
  }, [auth.token]);

  if (loading) {
    return (
      <div className="h-[100vh] w-[100vw] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <SessionProvider session={session}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <StatusContext.Provider value={{ loggedIn, setLoggedIn }}>
          <Component {...pageProps} />
        </StatusContext.Provider>
      </AuthContext.Provider>
    </SessionProvider>
  );
}
