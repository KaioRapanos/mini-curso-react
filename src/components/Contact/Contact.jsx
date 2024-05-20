import React from 'react'

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.title}>
            <h2 >Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/email.png')} alt='Email icon'/>
                <a href='mailto:kaioceza28@gmail.com'>kaioceza28@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedin.png')} alt='Linkedin icon'/>
                <a href='https://www.linkedin.com/in/kaio-rapanos/'>linkedin.com/in/kaio-rapanos</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/github.png')} alt='Github icon'/>
                <a href='https://github.com/KaioRapanos'>github.com/kaiorapanos</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/dio.png')} alt='Dio icon'/>
                <a href='https://www.dio.me/users/kaiorapanos'>dio.me/users/kaiorapanos</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/whatsapp.png')} alt='Whats icon'/>
                <a href='https://wa.me/5541998098871'>WhatsApp</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/home.png')} alt='Home icon'/>
                <a href='#' onclick={() =>window.scrollTo({ top: 0, behavior: 'smooth'})}>Home</a>
            </li>
        </ul>
    </footer>
  )
}
