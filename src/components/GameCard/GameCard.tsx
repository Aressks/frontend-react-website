import styles from "./GameCard.module.css";

export default function GameCard() {
  return (
    <div className={styles.container}>
      <a href="#">
        <img src="/background-img/card.png" alt="" />
      </a>
      <hr />
      <h3>Guardians of Lost Worlds (P2E Game)</h3>
      <p>
        Crafty Metaverse will soon launch Guardians of Lost Worlds, the first
        cross-chain P2E gaming experience. Our game will be available on
        multiple blockchains and then eventually on our side chain (SANKOFA).
        This will give users a seamless gameplay experience with little to no
        gas fees that allow users to focus on the game rather than worrying
        about losing their returns.
      </p>
    </div>
  );
}
