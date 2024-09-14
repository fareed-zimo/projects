"use client";
import React, { useState } from "react";
import SignUpBtn from "./sign-up-btn";
import { authenticate } from "@/lib/action";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [error, setError] = useState("");

  const router = useRouter();

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="py-10 px-5 border-black border-2 rounded-lg space-y-8 flex items-center flex-col">
        <p className="flex justify-center text-3xl">Sign In</p>
        <form
          action={async (formData) => {
            const user = await authenticate(formData);
            console.log(user);
            if (user?.status === "error") {
              setError(user.msg);
            } else {
              router.refresh();
            }
          }}
          className="space-y-4"
        >
          <div className="space-x-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="outline-none border-2 border-black rounded-sm w-[200px] px-1"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="outline-none border-2 border-black rounded-sm w-[200px] px-1"
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <div className="flex justify-end">
            <button className="border-2 border-black px-2 py-1 rounded-md">
              Sign In
            </button>
          </div>
        </form>
        {/* <GoogleSignIn /> */}
        <SignUpBtn />
      </div>
    </div>
  );
};

export default SignInForm;
