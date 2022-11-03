import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css'
import Nav from '../Components/Nav/Nav';
import BannerHome from '../Components/Banner/BannerHome';
import BannerContact from '../Components/Banner/BannerContact';
import FooterNav from '../Components/FooterNav/FooterNav'
import ContentContact from '../Components/ContentContainer/ContentContact';

class Contact extends PureComponent {


    render() {
        return (

            <div >
                <Nav></Nav>
                <BannerContact></BannerContact>
        
                    <ContentContact />
             
            
                <FooterNav></FooterNav>
            </div>
          
        )
    }
}

export default Contact