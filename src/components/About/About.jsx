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
                            I`m a frontend developer with experience in building 
                            reponsive and optimized sites
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
                            I have experience developing fast and optimised 
                            back-end systems and APIs
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
                            I have designed multiple landing pages and have
                            created design systems as well
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
