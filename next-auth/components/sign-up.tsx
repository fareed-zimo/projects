"use client";
import SignUpForm from "./sign-up-form";

const SignUp = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="py-10 px-5 border-black border-2 rounded-lg space-y-8 flex items-center flex-col">
        <p className="flex justify-center text-3xl">Sign Up</p>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
