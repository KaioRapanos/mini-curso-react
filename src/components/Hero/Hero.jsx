import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Kaio Rapanos</h1> 
            <p className={styles.description}>I am a technology student 
                aspiring to become a full-stack developer. 
                As a beginner, I am dedicated to learning and 
                understanding programming languages because 
                I believe in the potential of this career.
            </p>
            <a href='mailto:kaioceza28@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/hero.png")} className={styles.heroImg} alt='Hero image of me'/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
