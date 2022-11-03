import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ContentContact.module.css'
import mainLogo from '../../Images/mainLogo.svg'
import circleGithub from '../../Images/githubCircle.png'
import circleLinkedin from '../../Images/linkedInCircle.png'
import circleMail from '../../Images/mailCircle.png'

class ContentContact extends PureComponent {


    render() {
        return (
            <div className={styles.content}>
     

                <div className={styles.contactCardWrapper}>
                    <a className={styles.center} href="https://github.com/HlloWrld">
                        <img className={styles.center}  src={circleGithub} />
                    </a>
                    <h2 className={styles.cardh2}>GitHub</h2>
                    <p>https://hllowrld.github.io</p>
                </div>

                <div className={styles.contactCardWrapper}>
                    <a className={styles.center} href="https://linkedin.com/in/hllowrld">
                        <img className={styles.center}  src={circleLinkedin} />

                    </a>
                    <h2 className={styles.cardh2}>LinkedIn</h2>
                    <p>https://linkedin.com/hllowrld</p>
                </div>

                <div className={styles.contactCardWrapper}>
                <a className={styles.center} href="https://protonmail.com">
                        <img className={styles.center}  src={circleMail} />

                    </a>
                    <h2 className={styles.cardh2}>Mail</h2>
                    <p>hllowrld.contact@protonmail.com</p>
                </div>
                
 
    

          
        </div>
          
        )
    }
}

export default ContentContact