// components/Grid.js
import styles from '../styles/Grid.module.css';

const Grid = () => {
  const totalLines = 20; // Number of grid lines

  return (
    <div className={styles.gridBackground}>
      {/* Horizontal Lines */}
      {Array.from({ length: totalLines }, (_, i) => {
        const horizontalPosition = i / totalLines; // Normalize position between 0 and 1
        return (
          <div
            key={i}
            className={`${styles.line} ${styles.horizontal}`}
            style={{
              top: `${i * (100 / totalLines)}%`,
              opacity: horizontalPosition // Fade from solid (1) at top to transparent (0) at bottom
            }}
          />
        );
      })}

      {/* Vertical Lines */}
      {Array.from({ length: totalLines }, (_, i) => {
        const verticalPosition = i / totalLines; // Normalize position between 0 and 1
        return (
          <div
            key={i + totalLines}
            className={`${styles.line} ${styles.vertical}`}
            style={{
              left: `${i * (100 / totalLines)}%`,
              opacity: verticalPosition // Fade from solid (1) at left to transparent (0) at right
            }}
          />
        );
      })}
    </div>
  );
};

export default Grid;
