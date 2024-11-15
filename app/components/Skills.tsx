import styles from '../styles/Skills.module.css';

function Skills() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.subtitle}>My Skills</span>
        <h3 className={styles.title}>Skills & Expertise</h3>
        <p className={styles.description}>
          I bring a wide range of skills in front-end development, UI/UX design, and responsive web technologies. Here are some key areas of expertise.
        </p>
      </div>

      <div className={styles.skillsGrid}>
    
    
        <div className={styles.skillCard}>
          <span className={styles.skillName}>HTML</span>
          <p className={styles.skillDescription}>Markup Language</p>
          <div className={styles.progressCircle}>
            <div className={styles.percentage}>98%</div>
          </div>
        </div>


        <div className={styles.skillCard}>
          <span className={styles.skillName}>CSS & Tailwind</span>
          <p className={styles.skillDescription}>Styling & Layout</p>
          <div className={styles.progressCircle}>
            <div className={styles.percentage}>92%</div>
          </div>
        </div>

     
     
        <div className={styles.skillCard}>
          <span className={styles.skillName}>JavaScript</span>
          <p className={styles.skillDescription}>Logic & Interactivity</p>
          <div className={styles.progressCircle}>
            <div className={styles.percentage}>85%</div>
          </div>
        </div>



        <div className={styles.skillCard}>
          <span className={styles.skillName}>Bootstrap</span>
          <p className={styles.skillDescription}>Responsive UI</p>
          <div className={styles.progressCircle}>
            <div className={styles.percentage}>82%</div>
          </div>
        </div>

     
     
        <div className={styles.skillCard}>
          <span className={styles.skillName}>jQuery</span>
          <p className={styles.skillDescription}>DOM Manipulation</p>
          <div className={styles.progressCircle}>
            <div className={styles.percentage}>75%</div>
          </div>
        </div>
  
  
        <div className={styles.skillCard}>
          <span className={styles.skillName}>React & Next.js</span>
          <p className={styles.skillDescription}>Frameworks</p>
          <div className={styles.progressCircle}>
            <div className={styles.percentage}>60%</div>
          </div>
        </div>

        
        
        <div className={styles.skillCard}>
          <span className={styles.skillName}>TypeScript</span>
          <p className={styles.skillDescription}>Typed JavaScript</p>
          <div className={styles.progressCircle}>
            <div className={styles.percentage}>80%</div>
          </div>
        </div>

      
      
        
      </div>
    </section>
  );
}

export default Skills;
