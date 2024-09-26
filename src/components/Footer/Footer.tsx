import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles["links-wrapper"]}>
          <ul>
            <li>
              <div className={styles["links"]}>
                <img src="/logo/telegram.png" alt="Telegram logo" />

                <a href="">Telegram</a>
              </div>
            </li>
            <li>
              <div className={styles["links"]}>
                <img src="/logo/instagram.png" alt="Instagram logo" />
                <a href="">Instagram</a>
              </div>
            </li>
            <li>
              <div className={styles["links"]}>
                <img src="/logo/youtube.png" alt="Youtube logo" />
                <a href="">Youtube</a>
              </div>
            </li>
          </ul>
        </div>
        <p>Yallo Arts Production</p>
      </div>
    </footer>
  );
}
