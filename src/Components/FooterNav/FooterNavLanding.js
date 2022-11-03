import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './FooterNavLanding.module.css';
import linkedIn from '../../Images/linkedin.png'
import github from '../../Images/github.png'
import mail from '../../Images/mail.png'


class FooterNavLanding extends PureComponent {


    render() {
        return (
            <div className={styles.navBar}>
                <div className={styles.navLeft}>
                    <a className={styles.center} href="/"><p>2021, HlloWrld, All rights reserved. </p></a>
                </div>
              
                <div className={styles.navRight}>
                  
                    <a className={styles.center} >Find Me On </a>
                        
                    <a className={styles.center} href="https://github.com/HlloWrld">
                        <img className={styles.center}  src={github} />

                    </a>
                    <a className={styles.center} href="https://linkedin.com/in/hllowrld">
                        <img className={styles.center}  src={linkedIn} />

                    </a>
                    <a className={styles.center} href="https://protonmail.com">
                        <img className={styles.center}  src={mail} />

                    </a>
                </div>
          
            </div>

        )
    }
}

export default FooterNavLanding