import "../styles/global.scss";
import styles from "../styles/app.module.scss";
import Header from "../components/Header";
import Player from "../components/Player";
import React, { useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

function MyApp({ Component, pageProps }) {
  <div className={styles.appWrapper}>
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
    <Player></Player>
  </div>;
}

export default MyApp;
