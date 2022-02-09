import React from 'react'
import '../Styles/Work.css'
import workIcon from '../Assets/work-logo.png'
import { Link, Outlet, useLocation } from "react-router-dom";


function Work() {
    let {pathname} = useLocation();

    return (
        <div className='work'>
            <div className='tabHeader'>
                <div className='img'>
                    <img src={workIcon}></img>
                </div>
               <div className='p'>
                    <label>Work.js</label>
                </div> 
            </div>
            <div className='workPage'>
                <div className='innerNav'>
                    <Link className={pathname === "/work/hardware" && "activeLink"} to="/work/hardware">Hardware</Link>
                    <Link className={pathname === "/work/software" && "activeLink"} to="/work/software">Software</Link>
                    <Link className={pathname === "/work/visualarts" && "activeLink"} to="/work/visualarts">Visual Arts</Link>
                </div>
            </div>
            <Outlet />        
        </div>
    )
}

export default Work
