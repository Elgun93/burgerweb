'use client';

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fat burger | Main</title>
        <meta name="title" content="Fat burger" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>Main</h1>
        <div className={styles.mainImage}>
          <Image src="/fatburger.png" alt="" width={400} height={300} />
        </div>
        <p className={styles.text}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout.
        </p>
        <Link className={styles.btn} href="/burgers">
          All burgers
        </Link>
      </div>
    </>
  );
}
