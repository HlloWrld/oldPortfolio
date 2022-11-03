import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ContentProjects2.module.css'
import mainLogo from '../../Images/mainLogo.svg'
import $ from 'jquery';




const ContentProjects2 = () => {
 
 
        return (
          
            <div className={styles.contentWrapper}>
              
                 <div className={styles.content}>
                    <div>
                        <h2>Website Redesign:</h2>
                        <p>Redesign of a past project with mininmal design requirments. 
                            Showcases design skills and proficiency in CSS and SCSS.
                        </p>
                    </div>
                </div>

                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <h1>title</h1>
                    </div>
                </div>

                </div>
                

          
        )
    
}

export default ContentProjects2