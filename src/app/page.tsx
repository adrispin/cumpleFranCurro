"use client"

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import grupo from "@/images/grupo.jpg"
import { Balloons } from "@/components/Balloons/Balloons";

export default function Home() {
  const { push } = useRouter();

  return (
    <>
      <Balloons />
      <main className={styles.main}>
        <h1 className={styles.title}>Muchísimas felicidades!!</h1>

        <img className={styles.image} src={grupo.src} alt="" />

        <div>
          <h2 className={styles.question}>¿Quién eres?</h2>
          <div className={styles.buttonsContainer}>
            <button className={styles.button} onClick={() => push("/dequieneselcumple")}>Curro</button>
            <button className={styles.button} onClick={() => push("/dequieneselcumple")}>Fran</button>
          </div>
        </div>
      </main>
    </>
  );
}
