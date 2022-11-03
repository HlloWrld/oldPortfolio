import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css'
import Nav from '../Components/Nav/Nav';
import BannerHome from '../Components/Banner/BannerHome';
import FooterNav from '../Components/FooterNav/FooterNav';
import ContentHome from '../Components/ContentContainer/ContentHome';

class Home extends PureComponent {


    render() {
        return (

            <div >
                <Nav></Nav>
                <BannerHome></BannerHome>

                <ContentHome />

                <FooterNav></FooterNav>
            </div>
          
        )
    }
}

export default Home