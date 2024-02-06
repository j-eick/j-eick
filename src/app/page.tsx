import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.main__border} container row`}>
      <section className={styles.section}>
        <article className={`flow`}>
          <h1>Hi, my name is ...</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            repellat animi mollitia culpa nam recusandae excepturi explicabo at
            aliquid facere odit, vel a nemo beatae voluptates voluptas.
            Dignissimos, ullam perspiciatis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            repellat animi mollitia culpa nam recusandae excepturi explicabo at
            aliquid facere odit, vel a nemo beatae voluptates voluptas.
            Dignissimos, ullam perspiciatis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            repellat animi mollitia culpa nam recusandae excepturi explicabo at
            aliquid facere odit, vel a nemo beatae voluptates voluptas.
            Dignissimos, ullam perspiciatis.
          </p>
        </article>
      </section>
      <aside className={`${styles.aside}`} style={{ border: "2px solid red" }}>
        <ul role="list" className={styles.uList}>
          <li className="tile" style={{ backgroundColor: "darkred" }}>
            project
          </li>
          <li className="tile" style={{ backgroundColor: "green" }}>
            project
          </li>
          <li className="tile" style={{ backgroundColor: "orange" }}>
            project
          </li>
          <li className="tile" style={{ backgroundColor: "brown" }}>
            project
          </li>
          <li className="tile" style={{ backgroundColor: "violet" }}>
            project
          </li>
        </ul>
      </aside>
    </main>
  );
}
