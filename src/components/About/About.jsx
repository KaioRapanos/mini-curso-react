import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';


export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")}
                alt='Me sitting with a laptop'
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/cursor.png")}
                        alt='Cursor icon'
                    />
                    <div>
                        <h3 className={styles.aboutItemText}>Frontend Developer</h3>
                        <p>
                            I`m a frontend developer with experience in responsive 
                            design and website optimization gained through academic studies.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/server.png")}
                        alt='Server icon'
                    />
                    <div>
                        <h3 className={styles.aboutItemText}>Backend Developer</h3>
                        <p>
                        I'm gaining academic experience in backend development, 
                        focusing on building fast and optimized systems and APIs.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/design.png")}
                        alt='Design icon'
                    />
                    <div>
                        <h3 className={styles.aboutItemText}>UI Designer</h3>
                        <p>
                            I'm developing UI/UX skills through academic 
                            projects and personal research.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
