import styles from "./Balloons.module.css";

export const Balloons = () => {
  const random = (num: number) => {
    return Math.floor(Math.random() * num);
  }
  return (
    <div id="balloon-container" className={styles.balloonContainer}>
      {[...Array(30)].map(() => {
        const r = random(255);
        const g = random(255);
        const b = random(255);
        const mt = random(200);
        const ml = random(50);
        const dur = random(5) + 10;
        return <div className={styles.balloon} style={{
          backgroundColor: `rgba(${r},${g},${b},0.7)`,
          color: `rgba(${r},${g},${b},0.7)`,
          boxShadow: `inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7)`,
          margin: `${mt}px 0 0 ${ml}px`,
          animation: `float ${dur}s ease-in infinite`
        }} />
      })}
    </div>
  )
}