import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.module.css'

class Nav extends PureComponent {


    render() {
        return (
            <div className={styles.navBar}>
                <div className={styles.navLeft}>
                    <p>HlloWrld</p>
                </div>
              
                <div className={styles.navRight}>
                    <p>About</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>
          
            </div>
          
        )
    }
}

export default Nav