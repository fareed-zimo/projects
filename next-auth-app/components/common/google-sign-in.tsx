import { signIn } from "next-auth/react";

export default function GoogleSignIn() {
  return (
    <button
      onClick={async () => {
        await signIn("google");
      }}
      className="border-2 border-black py-2 px-2 rounded-md"
    >
      Continue with Google
    </button>
  );
}
