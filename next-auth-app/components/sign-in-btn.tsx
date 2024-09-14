"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SignInBtn = () => {
  const router = useRouter();
  const handleSignInRedirect = () => {
    router.push("/login");
  };
  return (
    <div className="w-full flex justify-start">
      <p
        className=" cursor-pointer border-b-2 border-black "
        onClick={handleSignInRedirect}
      >
        Sign in instead?
      </p>
    </div>
  );
};

export default SignInBtn;
