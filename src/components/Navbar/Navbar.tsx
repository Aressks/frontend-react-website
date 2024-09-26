import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles["container"]}>
      <div className={styles["nav-wrapper"]}>
        <div className={styles.logo}>
          <a href="">
            <img src="/logo/logo.jpg" alt="logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="">Главная</a>
          </li>
          <li>
            <a href="">Игры</a>
          </li>
          <li>
            <a href="">Обновления</a>
          </li>
          <li>
            <a href="">Будущие релизы</a>
          </li>
          <li>
            <a href="">О нас</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
