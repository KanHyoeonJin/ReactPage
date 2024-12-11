import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isHover, setIsHover] = useState(null);

    const handleMouseOver = (index) => {
        setIsHover(index);
    }

    const handleMouseOut = () => {
        setIsHover(null);
    }
    return (
        <div className="navbar">
            <div className='logo'>
                <img src={`${process.env.PUBLIC_URL}/img/logo.png`}></img>
            </div>
            <div className='category'>
                <div className='menu' onMouseOver={() => handleMouseOver(0)} onMouseOut={handleMouseOut}>
                    <Link to="/" className={isHover === 0 ? "category-list-hover" : "category-list"}>나라별</Link>
                </div>
                <div className='menu' onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>
                    <Link to="/" className={isHover === 1 ? "category-list-hover" : "category-list"}>테마별</Link>
                </div>
                <div className='menu' onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>
                    <Link to="/" className={isHover === 2 ? "category-list-hover" : "category-list"}>계절별</Link>
                </div>
                <div className='menu' onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>
                    <Link to="/post" className={isHover === 3 ? "category-list-hover" : "category-list"}>게시판</Link>
                </div>
            
            </div>
            <div className='loginbtn'>
                <button>로그인</button>
            </div>
        </div>
    )
}

export default Navbar;
