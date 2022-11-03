import React, { PureComponent } from 'react'
import styles from "./Colors.module.scss"
import mainLogo from "../../Images/mainLogo.svg"
import FooterNavLanding from '../FooterNav/FooterNavLanding'
import LandingMiddleNav from '../Nav/LandingMiddleNav'
import { Link } from 'react-router-dom'

class Colors extends PureComponent {
    // constructor(props) {
    //     super(props)

    //     this.state = {`
            
    //     }
    // }

    render() {
        return (
            <div className={styles.fit} data-poster-url="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-poster-00001.jpg" data-video-urls="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.mp4,https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" >
              <video className={styles.videoSize} loop autoplay="true" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
                <source src="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.mp4" data-wf-ignore="true" />
                <source className={styles.vidContainer} src="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.webm" data-wf-ignore="true" />
              
              </video>
              <div className={styles.headderWrapper}>
                <a href="/home" className={styles.landingHeader}>
               
                  <Link className={styles.noDecoration} to="/home">
                    <h1 className={styles.glow}>HlloWrld.</h1>
                  </Link>
                  
                </a>
              </div>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <div className={styles.logoCenter}>
              <img className={styles.logo} src={mainLogo} />
              </div>

              <LandingMiddleNav />


           
              <br></br>


              <FooterNavLanding></FooterNavLanding>
         
      
      
           
         
            
          </div>
        )
    }
}

export default Colors