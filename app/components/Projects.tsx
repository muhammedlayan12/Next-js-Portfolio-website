import Image from "next/image";
import styles from "../styles/Project.module.css";

import projectImage1 from "../../public/images/project-1.png";
import projectImage2 from "../../public/images/project-2.png";
import projectImage3 from "../../public/images/project-3.png";
import projectImage4 from "../../public/images/project-4.png";
import projectImage5 from "../../public/images/project-5.png";
import projectImage6 from "../../public/images/project-6.png";
import projectImage7 from "../../public/images/project-7.png";
import projectImage8 from "../../public/images/project-8.png";
import projectImage9 from "../../public/images/project9.png";

function Projects() {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.titleSection}>
          <span className={styles.subtitle}>My Work</span>
          <h2 className={styles.mainTitle}>Featured Projects</h2>
          <p className={styles.description}>
            Explore some of my recent work and the projects I have contributed to. These projects showcase my expertise in frontend development.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={projectImage1}
                alt="Press Mart"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Press Mart</h4>
              <p className={styles.cardDescription}>
                An E-commerce website showcasing only the styling and layout. It’s a project designed to practice frontend design for an online store.
              </p>
              <button className={styles.viewButton}>View Project</button>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={projectImage2}
                alt="V-Card Portfolio"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>V-Card Portfolio</h4>
              <p className={styles.cardDescription}>
                A digital portfolio project designed as a virtual business card, highlighting design skills and personal branding.
              </p>
              <button className={styles.viewButton}>View Project</button>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={projectImage3}
                alt="Mah Solution"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Mah Solution</h4>
              <p className={styles.cardDescription}>
                A website for a digital marketing agency, showcasing business solutions, services, and company portfolio.
              </p>
              <button className={styles.viewButton}>View Project</button>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={projectImage4}
                alt="Male Fashion"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Male Fashion</h4>
              <p className={styles.cardDescription}>
                An E-commerce site built on Next.js showcasing male fashion items, focusing on layout and product management.
              </p>
              <button className={styles.viewButton}>View Project</button>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={projectImage5}
                alt="Grocery Online Store"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Grocery Online Store</h4>
              <p className={styles.cardDescription}>
                A layout and styling project for an online grocery store, focused on product listings and cart functionality.
              </p>
              <button className={styles.viewButton}>View Project</button>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={projectImage6}
                alt="Grilli Restaurant"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Grilli</h4>
              <p className={styles.cardDescription}>
                A website for a restaurant business, focusing on menu design, online orders, and a clean, elegant layout.
              </p>
              <button className={styles.viewButton}>View Project</button>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={projectImage7}
                alt="Amazon Clone"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Amazon Clone</h4>
              <p className={styles.cardDescription}>
                A clone of the Amazon website, built using React and showcasing product listings, user authentication, and cart management.
              </p>
              <button className={styles.viewButton}>View Project</button>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={projectImage8}
                alt="Anon E-commerce"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Anon</h4>
              <p className={styles.cardDescription}>
                An E-commerce website focused solely on layout and styling, ideal for an online store that offers products in various categories.
              </p>
              <button className={styles.viewButton}>View Project</button>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={projectImage9}
                alt="Tourly"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Tourly</h4>
              <p className={styles.cardDescription}>
                A website for booking tours, focusing on service management, trip planning, and user experience.
              </p>
              <button className={styles.viewButton}>View Project</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
