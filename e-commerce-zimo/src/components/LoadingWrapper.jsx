import { auth } from "@/firebase/firebase-config";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = async () => {
      const user = await auth?.currentUser;
      if (!user) {
        router.push("/signin?redirected=true");
      } else {
        setLoading(false);
      }
    };
    loggedInUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper;
