import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import projects from "../../utils/projects";

console.clear();

export default function Home() {
  return (
    <>
      <main className={`${styles.main} container flex_row`}>
        <section className={styles.section}>
          <article className={`flow`}>
            <h1>Hi, my name is ...</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellat animi mollitia culpa nam recusandae excepturi explicabo
              at aliquid facere odit, vel a nemo beatae voluptates voluptas.
              Dignissimos, ullam perspiciatis.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellat animi mollitia culpa nam recusandae excepturi explicabo
              at aliquid facere odit, vel a nemo beatae voluptates voluptas.
              Dignissimos, ullam perspiciatis.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellat animi mollitia culpa nam recusandae excepturi explicabo
              at aliquid facere odit, vel a nemo beatae voluptates voluptas.
              Dignissimos, ullam perspiciatis.
            </p>
          </article>
        </section>
        <aside className={`${styles.aside}`}>
          <ul role="list" className={`flex_col ${styles.ul}`}>
            {projects.map((item) => (
              <li key={item.id} className={`tile ${styles.tile}`}>
                <img src={item.thumbn} alt={item.alt} />
              </li>
            ))}
          </ul>
        </aside>
      </main>
      <div>
        <ul className={`flex_row container`} role="list">
          <li>
            <p>LinkedIn</p>
          </li>
          <li>
            <p>github</p>
          </li>
          <li>
            <p>sumthin</p>
          </li>
        </ul>
      </div>
    </>
  );
}
