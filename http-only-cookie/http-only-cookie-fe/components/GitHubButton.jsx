import { useSession, signIn, signOut } from "next-auth/react";

export default function GitHubButton() {
  return (
    <button
      onClick={() => {
        signIn("github");
      }}
    >
      {" "}
      Continue with GitHub{" "}
    </button>
  );
}
