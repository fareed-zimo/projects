import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  const handleClick = async () => {
    await signOut();
  };
  return <button onClick={handleClick}>Sign Out</button>;
};

export default SignOut;
