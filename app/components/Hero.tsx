import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import heroimg from "../../public/images/hero.png";

function Hero() {
    return (
    <div>
        <section className={styles.hero}>
            <div className={styles.content}>
                <h6>Hi <span>There</span></h6>
                <h2>Iam Frontend Developer</h2>
                <p>Hi, I’m a passionate Front-End Developer with expertise in HTML, CSS, JavaScript, TypeScript, Bootstrap, jQuery, and Tailwind CSS. I specialize in creating responsive and user-friendly web interfaces and am currently expanding my skills by learning Next.js. And Diving Into Backend Development I enjoy building sleek and functional designs that bring ideas to life!</p>
                <Link href="" >View More</Link>
            </div>
            <Image className={styles.img} src={heroimg} alt="heroimg"/>
        </section>
    </div>
  )
}

export default Hero;