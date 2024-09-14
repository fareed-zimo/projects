import React from "react";
import Head from "next/head";
import HomeScreen from "../components/HomeScreen";

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Nextron Video Recorder</title>
      </Head>
      <HomeScreen />
    </React.Fragment>
  );
}
