import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "@/firebase/firebase-config";
import { Button, CircularProgress, IconButton, TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userRecord = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log(auth.currentUser);
      router.push("/");
    } catch (error) {
      console.error(error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Something went wrong, try again",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const signUpWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const signUpWithFacebook = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, facebookProvider);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  function characterCount(email) {
    let count = 0;
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") {
        count++;
      }
    }
    return count;
  }

  const checkValidation = () => {
    if (!name) {
      setNameError("Name is empty");
    }
    if (email) {
      if (characterCount(email) !== 1) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    } else {
      setEmailError("Email is empty");
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return false;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    } else {
      setConfirmPasswordError("");
    }

    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      // Proceed with signup
      handleSubmit(e);
    }
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center sm:m-16">
          <form onSubmit={handleSignup} className="max-w-md w-full">
            <div className="flex flex-col space-y-3 p-6 bg-white border-1.5 rounded-lg shadow relative m-10">
              <div className="font-semibold text-3xl flex justify-center mb-6">
                Sign Up
              </div>
              <TextField
                id="name"
                type="text"
                label="Name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
                size="small"
                error={!!nameError}
                helperText={nameError}
              />

              <TextField
                id="email"
                type="text"
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                size="small"
              />

              <TextField
                id="password"
                type="password"
                label="Password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                size="small"
              />

              <TextField
                id="confirm-password"
                type="password"
                label="Confirm Password"
                variant="outlined"
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!confirmPasswordError}
                helperText={confirmPasswordError}
                size="small"
              />
              <div className="flex justify-center w-full">
                <Button
                  type="submit"
                  variant="contained"
                  className="w-40 max-w-36"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Sign Up"}
                </Button>
              </div>

              <div className="flex justify-center pt-2 font-light text-sm">
                Already have an account?
                <span className="font-bold px-1">
                  <Link href={"/signin"}>Sign In</Link>
                </span>
              </div>

              <div className="flex justify-center pt-2 font-light text-sm">
                OR CONTINUE WITH
              </div>
              <div className="flex justify-center">
                <IconButton
                  aria-label="signinWithGoogle"
                  color="primary"
                  onClick={signUpWithGoogle}
                >
                  <GoogleIcon />
                </IconButton>
                <IconButton
                  aria-label="signinWithFacebook"
                  color="primary"
                  onClick={signUpWithFacebook}
                >
                  <FacebookRoundedIcon />
                </IconButton>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Signup;
