import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const MainNavbar = () => {
    return (
        <div className="navbar">
            <div className='logo'>
                <img src={`${process.env.PUBLIC_URL}/img/logo.png`}></img>
            </div>
            <div className='category'>
                <div className='menu'><Link to="/">나라별</Link></div>
                <div className='menu'><Link to="/">테마별</Link></div>
                <div className='menu'><Link to="/">계절별</Link></div>
                <div className='menu'><Link to="/">게시판</Link></div>
            
            </div>
            <div className='loginbtn'>
                <button>로그인</button>
            </div>
        </div>
    )
}

export default MainNavbar;
