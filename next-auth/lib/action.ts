/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(formData: FormData) {
  try {
    return await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { msg: "Invalid credentials", status: "error" };
        case "CredentialsSignin":
          throw error;
        default:
          return { msg: "Something went wrong", status: "error" };
      }
    }
  }
}
