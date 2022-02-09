import React from 'react'
import '../Styles/Home.css'
import homeIcon from '../Assets/home-icon.png'
import stickerImg from '../Assets/stickerpack-img.png'

function Home() {
    return (
        <div className='home'>
            <div className='tabHeader'>
                <div className='img'>
                    <img src={homeIcon}></img>
                </div>
               <div className='p'>
                    <label>Home.js</label>
                </div> 
            </div>
            <div className='homePage'>
                <div className='intro'>
                    <p>
                        <span className='textPurple'>var</span> Name <span className='textDarkpink'>=</span> Felice Ho<span className='textLightpink'>;</span>
                        <br></br>
                        <br></br>
                        <span className='textGray'>
                        /*
                        </span>
                        <br></br>
                        <p className='innerText'>
                            <span className='textGray'>
                            Hello World!
                            <br></br>
                            <br></br>
                            I’m</span> Felice, <span className='textGray'>an</span> AI/Machine Learning
                                Engineer<span className='textGray'>.</span> <span className='textGray'>I graduated</span> SUTD <span className='textGray'>with a
                                major in</span> Data Analytics <span className='textGray'>and a minor in</span> AI. 
                            <br></br>
                            <br></br>
                            <span className='textGray'>
                            Below are some of the projects I’ve worked on. 
                            <br></br>
                            Thanks for stopping by! 
                            <br></br>
                            <br></br>
                            Read more about me</span> <a href="/about" className='textOrange'>here</a>.
                            <br></br>
                        </p>
                        <span className='textGray'>
                            */</span>
                    </p>
                </div>
                <div className='teleSticker'>
                    <img src={stickerImg}></img>

                </div>
            </div>
        </div>
    )
}

export default Home
