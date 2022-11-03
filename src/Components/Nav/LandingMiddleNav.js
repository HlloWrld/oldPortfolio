import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './LandingMiddleNav.module.css'
import { Link } from 'react-router-dom'

class LandingMiddleNav extends PureComponent {


    render() {
        return (
            <div className={styles.navBar}>
                
                <div className={styles.navLeft}>
                    <a className={styles.center} href="/">
                        <h1 className={styles.middleHeader}>HlloWrld</h1>
                    </a>
                </div>
              
                <div className={styles.navRight}>
                  
                    <Link className={styles.noDecoration} to="/home">
                        <a className={styles.center} href="/home">About</a>
                    </Link>

                    <Link className={styles.noDecoration} to="/projects">
                        <a className={styles.center} href="/Contact">Projects</a>
                    </Link>

                    <Link className={styles.noDecoration} to="/Contact">
                        <a className={styles.center} href="/Contact">Contact</a>
                    </Link> 
              
                </div>
          
            </div>
          
        )
    }
}

export default LandingMiddleNav