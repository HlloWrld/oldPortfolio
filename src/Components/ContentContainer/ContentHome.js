import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ContentHome.module.css'
import mainLogo from '../../Images/mainLogo.svg'

class ContentHome extends PureComponent {


    render() {
        return (
            <div className={styles.contentWrapper}>
                 <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <h2 className={styles.aboutMe}>About Me</h2>
                    
                    <p>I focus on developing highly readible, 
                    industry standard code with security as a 
                    top priority.
                    <br></br>
                    <br></br>
           
                    
                        <p className={styles.italic}>
                            "You hear that Mr. Anderson?... That is the sound of inevitability..."
                            <br></br>
                            - Agent Smith
                        </p>
                        <br></br>
            

                        When I'm not coding you can find me in the mounatains. 

                    </p>
                </div>
                <img className={styles.logo} src={mainLogo} />

                
          
                </div>
            </div>
           
          
        )
    }
}

export default ContentHome