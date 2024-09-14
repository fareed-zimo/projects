import { StatusContext } from "@/pages/_app";
import { useContext } from "react";

const useStatus = () => {
  const { loggedIn, setLoggedIn } = useContext(StatusContext);

  return { loggedIn, setLoggedIn };
};

export default useStatus;
