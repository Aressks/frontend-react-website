import styles from "./Home.module.css";
import GameCard from "../GameCard/GameCard";

export default function Header() {
  return (
    <header className={styles["container"]}>
      <div className={styles["main-wrapper"]}>
        <div className={styles.content}>
          <h3>Невероятные приключения</h3>
          <h1>ПОГРУЗИСЬ В ВСЕЛЕННУЮ ВИДЕОИГР ВМЕСТЕ С НАМИ</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=lJkrdU2Qh9E"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button>Играй сейчас</button>
        </div>
      </div>
      <div className={styles["content-games"]}>
        <div className={styles["games-wrapper"]}>
          <h1>Лучшие игры</h1>
          <div className={styles["game-cards"]}>
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
        </div>
      </div>
    </header>
  );
}
