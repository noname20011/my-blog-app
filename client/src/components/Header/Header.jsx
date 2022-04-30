import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header_title">
                <span className="header_titleSm">Me & My future</span>
                <span className="header_titleLg">Blog</span>
            </div>
            <img className='header_img' src="https://source.unsplash.com/1600x900/?nature,photography,technology" alt="" />
        </div>
    )
}

export default Header