import React from 'react'
import '../Styles/About.css'
import aboutIcon from '../Assets/about-icon.png'
import  profilePic from '../Assets/profilepic-img.png'

function About() {
    return (
        <div className='about'>
            
            <div className='tabHeader'>
                <div className='img'>
                <img src={aboutIcon}></img>
                </div>
               <div className='p'>
                    <label>About.js</label>
                </div> 
            </div>
            <div className='aboutPage'>

                <div className='pfp'>
                    <img src={profilePic}></img>
                    <p className="name">
                    <span className="textPurple">var</span> Name <span className="textDarkpink">=</span> Felice Ho<span className="textLightpink">;</span>
                    </p>
                </div>

                <div className='resume'>
                    <p>
                        <span className="textPurple">function</span> <span className="textDarkpink">Education</span>(<span className="textOrange">SUTD</span>) <span>&#10100;</span>
                            <br></br>
                            <p className='innerText'>
                                <span className="textPurple">var</span> FocusTrack <span className="textDarkpink">=</span> Data Analytics, minor in AI<span className="textLightpink">;</span>
                                <br></br>
                                <span className="textPurple">var</span> Scholarship <span className="textDarkpink">=</span> Global Leadership Program Scholarship<span className="textLightpink">;</span>
                            </p>
                            <span>&#10101;</span>
                    </p>
                    <p>
                        <span className="textPurple">function</span> <span className="textDarkpink">WorkExperience</span>(<span className="textOrange">Prudential</span>) <span>&#10100;</span>
                                <br></br>
                                <p className='innerText'>
                                    <span className="textGray">//</span><span className="textOrange">ToDo</span><span className="textGray">: Develop functioning prototype of </span>AI-Whatsapp Chatbot
                                    <br></br>
                                    <span className="textGray">//</span><span className="textOrange">ToDo</span><span className="textGray">: Create a deep learning model to </span>classify client’s document submissions
                                </p>
                        <span>&#10101;</span>
                    </p>
                    <p>
                        <span className="textPurple">function</span> <span className="textDarkpink">WorkExperience</span>(<span className="textOrange">ASTAR</span>) <span>&#10100;</span>
                                <br></br>
                                <p className='innerText'>
                                    <span className="textGray">//</span><span className="textOrange">ToDo</span><span className="textGray">: Develop and complete a deep learning model that is able to </span>optimise Digital Forensic
                                </p>
                        <span>&#10101;</span>
                    </p>
                    <p>
                        <span className="textPurple">function</span> <span className="textDarkpink">Project</span>(<span className="textOrange">SUTD</span>) <span>&#10100;</span>
                                <br></br>
                                <p className='innerText'>
                                    <span className='textGray'>//StockTake, Featured project</span>
                                    <br></br>
                                    <span className="textGray">//</span><span className="textOrange">ToDo</span><span className="textGray">: Develop an </span>android application <span className="textGray">to ease the process of inventory management</span>
                                </p>
                        <span>&#10101;</span>
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default About
