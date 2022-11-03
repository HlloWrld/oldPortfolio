import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './BannerProjects.module.css'

class BannerProject extends PureComponent {


    render() {
        return (
            <div className={styles.test} data-poster-url="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-poster-00001.jpg" data-video-urls="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.mp4,https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" >
              <video className={styles.videoSize} loop autoplay="true" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
                <source src="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.mp4" data-wf-ignore="true" />
                <source className={styles.vidContainer} src="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.webm" data-wf-ignore="true" />
              </video>
              <div className={styles.headderWrapper}>
                <div className={styles.landingHeader}>
                  <div className={styles.bannerWrapper}>
                    <h1 className={styles.bannerTitle}>Projects</h1>
                    <p>
                        Take a glimpse into what I’ve been working on. 
                    </p>

                  </div>
                  
                  </div>
              </div>
          </div>
          
        )
    }
}

export default BannerProject