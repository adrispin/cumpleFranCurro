import kartImage from "@/images/kart.png";
import styles from "./Kart.module.css";

interface KartProps {
  faceImage: string;
}

export const Kart = ({ faceImage }: KartProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.kart} src={kartImage.src} alt="" />
      <img className={styles.face} src={faceImage} alt="" />
    </div>
  )
}