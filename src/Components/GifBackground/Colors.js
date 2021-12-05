import React, { PureComponent } from 'react'
import styles from "./Colors.module.css"

class Colors extends PureComponent {
    // constructor(props) {
    //     super(props)

    //     this.state = {
            
    //     }
    // }

    render() {
        return (
            <div data-poster-url="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-poster-00001.jpg" data-video-urls="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.mp4,https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" >
            <video className={styles.videoSize} loop autoplay="true" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
              <source src="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.mp4" data-wf-ignore="true" />
              <source src="https://assets.website-files.com/5fcf9ac604d37418aa70a5ab/6040d72dcd78ad8f04db36cf_gradioooo-ps-transcode.webm" data-wf-ignore="true" />
            </video>
            <div className={styles.headderWrapper}>
            <h1 className={styles.landingHeader}>HlloWrld</h1>
            </div>
           
         
            
          </div>
        )
    }
}

export default Colors