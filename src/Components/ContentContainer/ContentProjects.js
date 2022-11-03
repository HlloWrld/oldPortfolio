
import './ContentProjects.scss';
import React from 'react';
import mainLogo from '../../Images/mainLogo.svg';
import github from '../../Images/githubWhite.png';


import cardLogo1 from '../../Images/townsquare.svg';
import cardLogo2 from '../../Images/mvc.svg';
import cardLogo3 from '../../Images/procon.svg';
import cardLogo4 from '../../Images/siteredesign.svg';
import cardLogo5 from '../../Images/stock.svg';


const initialLayout = [
  {
    id: 1,
    h1Text: 'Town\nSquare',
    Title: 'TownSquare',
    TitleSub: 'Social Media Application',
    pText: 'Town Square is a social media application to find like-minded individuals in a city near you. This application allows the user to explore content with specific filter attributes.',
    link: 'https://idsp.link',
    logoDisplay: cardLogo1,
    expanded: false
  },
  {
    id: 2,
    h1Text: 'MVC Calculator',
    Title: 'Calculator Application',
    TitleSub: 'Calculator in C#',
    pText: 'This application is a calculator application built with dotnet. Application was built using C#, and Bootstrap CSS.',
    link: 'https://github.com/HlloWrld/Code1st',
    logoDisplay: cardLogo2,
    expanded: false
  },
  {
    id: 3,
    h1Text: 'Procon',
    Title: 'Procon',
    TitleSub: 'Project Management Platform',
    pText: 'Join an open source community of developers and take your development skills to the next level. Procon provides a project platform that connects developers to industry leaders around the globe.',
    link: 'https://idsp3-procon-test.herokuapp.com/',
    logoDisplay: cardLogo3,
    expanded: false
  },
  {
    id: 4,
    h1Text: 'Site\nRedesign',
    Title: 'Website Wireframe, Prototype and Redesign',
    pText: 'This app is a redesign of the homepage for BCIT. This application was given as an assignment with no requirments for styling and design. Application was redesigned with updated styling.',
    link: 'https://github.com/HlloWrld/siteRedesign',
    logoDisplay: cardLogo4,
    expanded: false
  },
  {
    id: 5,
    h1Text: 'Stock\nTracker',
    Title: 'Pull API for Popular Stocks',
    TitleSub: 'Stock Market Aggregator',
    pText: 'Application uses API from TradingView to pull stock information. Display popular or featured charts.',
    link: 'https://github.com/HlloWrld/stockApp',
    logoDisplay: cardLogo5,
    expanded: false
  }
]
function ContentProject() {
  const [expanded, setExpanded] = React.useState(false); 
  const openClose = () => setExpanded(!expanded)
  const tileTextCSSOpen = {transition: 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)'}
  const tileTextCSSClose = {transition: 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)'}
  const stripCloseCSSOpen = {transition: 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)'}
  const stripCloseCSSClose = {transition: 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)'}
  const [layout, setLayout]  = React.useState(initialLayout)
  const open = (id) => {
    let out = layout.map((lay, i) => {
      if(lay.id === id ) return {...lay, expanded: true}
      else return {...lay, expanded: false}
    })
    openClose()
    setLayout(out)
  }
  return (

      <div className="stripsBackground">
          <section className="strips">
          {layout.map((lay, i) => {
            return (
            <article onClick={() => {open(lay.id)}} style={lay.expanded ? tileTextCSSOpen : tileTextCSSClose } className={`strips__strip ${lay.expanded && 'strips__strip__expanded'}`}>
              
              <div className="strip__content">
                <h1 className="strip__title" data-name="Lorem">{lay.h1Text}</h1>
 
                  <div className="strip__inner-text">
                    <div className="innerTextWrapper">
                      <h2>{lay.Title}</h2>
                      <h1 className="subText">{lay.TitleSub}</h1>
                      <p>{lay.pText}</p>
                      <p>
                        <a className="linkWrap" href={lay.link} target="_blank">
                          <h1 className="linkNoDec">{lay.link}</h1>
                          <img src={github}></img>
                        </a>
                      </p>
                    </div>
                    <img className="logo" src={lay.logoDisplay} />
                  </div>
              </div>
            </article>)
          })}
      <i onClick={() => {openClose();setLayout(initialLayout)}} style={expanded ? stripCloseCSSOpen : stripCloseCSSClose } className={`fa fa-close strip__close ${expanded && 'strip__close--show'}`}></i>
    </section>

    </div>

    
    
  );
}

export default ContentProject;