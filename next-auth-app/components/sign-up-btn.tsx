"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SignUpBtn = () => {
  const router = useRouter();
  const handleSignUpRedirect = () => {
    router.push("sign-up");
  };
  return (
    <div className="w-full flex justify-start">
      <p
        className=" cursor-pointer border-b-2 border-black "
        onClick={handleSignUpRedirect}
      >
        Sign up instead?
      </p>
    </div>
  );
};

export default SignUpBtn;
