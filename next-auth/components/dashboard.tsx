"use client";

import { useEffect, useRef, useState } from "react";
import SignOut from "./sign-out";
import { Session } from "next-auth";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Dashboard({ session }: { session: any }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const user = session?.user;
  console.log(user);

  const handleDropDown = () => {
    setDropDownOpen((prev) => !prev);
  };

  useEffect(() => {
    if (dropDownOpen) {
      const handleDropDownClose = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          // Close the dropdown only if the click is outside the dropdown
          setDropDownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleDropDownClose);

      return () => {
        document.removeEventListener("mousedown", handleDropDownClose);
      };
    }
  }, [dropDownOpen]);

  if (!user) {
    return null;
  }
  return (
    <div className="h-screen w-screen ">
      <nav className="flex justify-end px-8 bg-gray-100 py-2">
        <img
          src={user?.image || "/placeholder_avatar.png"}
          alt="avatar"
          className="w-[50px] h-[50px] cursor-pointer hover:shadow-lg rounded-full"
          onClick={handleDropDown}
        />
        {dropDownOpen && (
          <div
            ref={ref}
            className="z-10 border-2 border-black  p-2 absolute top-[60px] space-y-1 bg-white"
          >
            <p className="cursor-pointer">Profile</p>
            <div className="w-full h-[1px] bg-black" />
            <SignOut />
          </div>
        )}
      </nav>
      <div className="flex justify-center items-center text-4xl">
        <p>Welcome {user.name || "User"}</p>
      </div>
    </div>
  );
}
