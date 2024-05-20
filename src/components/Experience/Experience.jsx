import React from 'react';

import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import historyProf from '../../data/historyProf.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
            <h2 className={styles.subTitle} style={{ height: '30px' }}>Contact with technologies</h2>
                {skills.map((skill, id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img 
                                    src={getImageUrl(skill.imageSrc)} 
                                    alt={skill.title}
                                    style={{ width: '75px', height: '75px' }}
                                />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
            <ul className={styles.history}>
            <h2 className={styles.subTitle}>Academic experience</h2>
                {history.map((historyItem, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            <img 
                                src={getImageUrl(historyItem.imageSrc)} 
                                alt={`${historyItem.organisation} Logo`}
                            />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    );
                })}
                <h2 className={styles.subTitle}>Professional experience</h2>
                {historyProf.map((historyItem, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            <img 
                                src={getImageUrl(historyItem.imageSrc)} 
                                alt={`${historyItem.organisation} Logo`}
                            />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </section>
  )
}
