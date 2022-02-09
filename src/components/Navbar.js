import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/favicon.png'
import gitLogo from '../Assets/git-logo.png'
import instaLogo from '../Assets/insta-logo.png'
import linkedinLogo from '../Assets/linkedin-logo.png'
import menuIcon from '../Assets/menu-icon.png'
import '../Styles/Navbar.css'

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    };

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container-left'>
                    <img src={Logo}/>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/work">Work</Link>
                </div>

                <div className='navbar-container-mid'>
                    <Link to="/">felice_portfolio.js</Link>
                </div>

                <div className='navbar-container-right'>
                    <button>
                        <img src={gitLogo}/>
                    </button>
                    <button>
                        <img src={instaLogo}/>

                    </button>
                    <button>
                        <img src={linkedinLogo}/>

                    </button>
                </div>

                <div className='navbar-container-right-close'>
                    
                    <button onClick={toggleNavbar}>
                        <img src={menuIcon}/>
                    </button>
                </div>

            </nav>
            <div id={openLinks ? "open" : "close"} className='openClose'>
                <div className='hiddenLinks'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/work">Work</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
