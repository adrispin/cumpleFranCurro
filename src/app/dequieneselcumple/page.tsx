"use client"

import { Balloons } from "@/components/Balloons/Balloons";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import jig from "@/images/jig.webp";
import styles from "./page.module.css";

const DeQuienEsElCumple: NextPage = () => {
  const { push } = useRouter();
  return (
    <>
      <Balloons />
      <main className={styles.main}>
        <h1 className={styles.title}>¿Seguro? ¿Cómo se llama el típico señuelo para pescar de metal?</h1>

        <img className={styles.image} src={jig.src} alt="" />

        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={() => push("/cumple/curro")}>Jig</button>
          <button className={styles.button} onClick={() => push("/cumple/fran")}>Yipeta</button>
        </div>
      </main>
    </>
  );
}

export default DeQuienEsElCumple;