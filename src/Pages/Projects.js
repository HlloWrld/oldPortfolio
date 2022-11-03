import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Projects.module.css'
import Nav from '../Components/Nav/Nav';
import BannerHome from '../Components/Banner/BannerHome';
import BannerProjects from '../Components/Banner/BannerProjects';
import FooterNav from '../Components/FooterNav/FooterNav';
// import ContentProject2 from '../Components/ContentContainer/ContentProject2';
import ContentProject from '../Components/ContentContainer/ContentProjects';

class Projects extends PureComponent {


    render() {

        return (



            <div >
                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />

                <Nav></Nav>
                <BannerProjects></BannerProjects>
                <div className={styles.cardWrapper}>
                    <ContentProject />

                </div>
            
                <br></br>
                <br></br>
                <br></br>
          
               
                <FooterNav></FooterNav>
            </div>
          
        )
    }
}

export default Projects