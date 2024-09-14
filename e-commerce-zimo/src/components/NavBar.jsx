import Link from "next/link";
import AccountMenu from "./AccountMenu";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LanguageSwitcher from "./LanguageSwitcher";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [loginState, setLoginState] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginState(true);
      } else {
        setLoginState(false);
      }
    });
  }, [loginState]);

  return (
    <nav id="header" className="w-full z-30 top-0 py-1 bg-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <div className="order-2 md:order-2 flex items-center justify-center md:justify-start">
          <Link
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
            href="/"
          >
            <LocalMallIcon />
            ZIMO
          </Link>
        </div>

        <div className="order-3 md:order-3 flex items-center">
          {loginState ? (
            <>
              <Link
                className="inline-block no-underline hover:text-black"
                href="/cart"
              >
                <ShoppingCartIcon />
              </Link>
              <AccountMenu />
            </>
          ) : (
            <Link
              className="pl-3 inline-block no-underline hover:text-black"
              href="/signin"
            >
              <AccountCircleIcon fontSize="large" />
            </Link>
          )}
          <div className="ml-2 flex flex-row">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
