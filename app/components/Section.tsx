import Image from "next/image";
import styles from "../styles/Section.module.css";
import author from "../../public/images/hero.png";

function Section() {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        <h3 className={styles.heading}>
          Have a project on your mind.
        </h3>
        <p className={styles.description}>
          I bring a wide range of skills in front-end development, UI/UX design, and responsive web technologies. Here are some key areas of expertise.
        </p>
        <button className={styles.button}>Contact Me</button>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={author}
          alt="Author"
          width={300}
          height={400}
          className={styles.image}
        />
      </div>
    </section>
  );
}

export default Section;
