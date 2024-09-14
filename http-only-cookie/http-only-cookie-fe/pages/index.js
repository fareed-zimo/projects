import useStatus from "@/lib/useStatus";
import axios from "axios";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return { props: { session } };
}

export default function Home({ session }) {
  const { loggedIn, setLoggedIn } = useStatus();

  const router = useRouter();

  const handleLogout = () => {
    if (session) {
      signOut();
    }

    axios
      .get("http://localhost:4000/logout", {
        withCredentials: true,
      })
      .then(() => {
        setLoggedIn(false);
      });
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex w-[100vw] h-[100vh] ">
      <div className="text-9xl w-full flex justify-center items-center">
        {loggedIn || session ? <p>Logged In</p> : <p>Not Logged In</p>}
      </div>
      {loggedIn || session ? (
        <button
          onClick={handleLogout}
          className="border-2 border-black px-2 py-1 rounded-lg absolute flex top-10 right-10"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="border-2 border-black px-2 py-1 rounded-lg absolute flex top-10 right-10"
        >
          Login
        </button>
      )}
    </div>
  );
}
