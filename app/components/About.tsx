import Link from "next/link";
import Image from "next/image";
import styles from "../styles/About.module.css";
import aboutimg from "../../public/images/hero.png";

function About() {
    return (
    <div>
        <section className={styles.about}>
        <div className="mt-6 md:mt-0 border-[2px] border-purple rounded-full flex justify-center items-center">
          <div className="relative w-[40vw] h-[40vw] sm:w-[25vw] sm:h-[25vw] md:w-[20vw] md:h-[20vw] overflow-hidden rounded-full">
            <Image
              src={aboutimg}
              alt="Profile Image"
              layout="intrinsic"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>
            <div className={styles.content}>
                <h6>My <span>Intro</span></h6>
                <h2>About Me</h2>
                <p>Hi, I’m a passionate Front-End Developer with expertise in HTML, CSS, JavaScript, TypeScript, Bootstrap, jQuery, and Tailwind CSS. I specialize in creating responsive and user-friendly web interfaces and am currently expanding my skills by learning Next.js. And Diving Into Backend Development I enjoy building sleek and functional designs that bring ideas to life!</p>
                <Link href="" >Hire Me</Link>
            </div>
        </section>
    </div>
  )
}

export default About;