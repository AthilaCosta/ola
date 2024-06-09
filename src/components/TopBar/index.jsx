import styles from "./topbar.module.css";

export function TopBar() {
  return (
    <div className={styles["container"]}>
      <div className={styles["logo-container"]}>LOGO</div>
      <div className={styles["sections-container"]}>
        <a className={styles['projects']}>Projects</a>
        <a className={styles['skills']}>Skills</a>
        <a className={styles['about']}>About</a>
      </div>
      <div className={styles["socialNetworks-container"]}>
        <a className={styles['linkedin']}>LinkedIn</a>
        <a className={styles['github']}>GitHub</a>
      </div>
    </div>
  );
}
