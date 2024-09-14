import {
  auth,
  facebookProvider,
  googleProvider,
} from "@/firebase/firebase-config";
import { Button, CircularProgress, IconButton, TextField } from "@mui/material";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";

const signin = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      const { redirected } = router.query;
      if (redirected) {
        router.back();
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Invalid email or password",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      const { redirected } = router.query;
      if (redirected) {
        router.back();
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithFacebook = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, facebookProvider);
      const { redirected } = router.query;
      if (redirected) {
        router.back();
      } else {
        router.push("/");
      }
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

    return true;
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      handleSubmit(e);
    }
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center sm:m-16">
          <form onSubmit={handleSignIn} className="max-w-md w-full">
            <div className="flex flex-col space-y-3 p-6 bg-white border-1.5 rounded-lg shadow relative m-10">
              <div className="font-semibold text-3xl flex justify-center mb-6">
                Sign In
              </div>
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
              <div className="flex justify-center w-full">
                <Button
                  type="submit"
                  variant="contained"
                  className="w-40 max-w-36"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Sign In"}
                </Button>
              </div>
              <div className="flex justify-center pt-2 font-light text-sm">
                Don't have an account?
                <span className="font-bold px-1">
                  <Link href={"/signup"}>Sign Up</Link>
                </span>
              </div>

              <div className="flex justify-center pt-2 font-light text-sm">
                OR CONTINUE WITH
              </div>
              <div className="flex justify-center">
                <IconButton
                  aria-label="signinWithGoogle"
                  color="primary"
                  onClick={signInWithGoogle}
                >
                  <GoogleIcon />
                </IconButton>
                <IconButton
                  aria-label="signinWithFacebook"
                  color="primary"
                  onClick={signInWithFacebook}
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

export default signin;
