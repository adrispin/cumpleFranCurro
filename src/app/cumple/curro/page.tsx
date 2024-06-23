import fran from "@/images/fran.webp";
import curro from "@/images/curro.webp";
import adri from "@/images/adri.webp";
import styles from "./page.module.css";
import { Kart } from "@/components/Kart/Kart";

export default function Fran() {
  return (
    <div className={styles.main}>
      <div className={styles.piano}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>

      <h1 className={styles.title}>Curro, tenemos día de Karts</h1>
      <div className={styles.road}>
        <div className={styles.groupKarting}>
          <div className={styles.kartGroup}>
            <Kart faceImage={fran.src} />
            <Kart faceImage={adri.src} />
          </div>
          <div className={styles.mainKart}>
            <Kart faceImage={curro.src} />
          </div>
        </div>
        <div className={styles.goal}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>

      <div className={styles.piano}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}