import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

class Nav extends PureComponent {


    render() {
        return (
            <div className={styles.navBar}>
                <div className={styles.navLeft}>
                    <a className={styles.center} href="/"><p>HlloWrld</p></a>
                </div>
              
                <div className={styles.navRight}>
                    <Link className={styles.noDecoration} to="/home">
                        <a className={styles.center} href="/home">About</a>
                    </Link>
                    <Link className={styles.noDecoration} to="/projects">
                    <a className={styles.center} href="/projects">Projects</a>
                    </Link>
                    <Link className={styles.noDecoration} to="/contact">
                        <a className={styles.center} href="/contact">Contact</a>
                    </Link>
               

                    
                </div>
          
            </div>
          
        )
    }
}

export default Nav