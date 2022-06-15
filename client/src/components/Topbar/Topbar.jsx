import React, { useState } from 'react'
import { useEffect } from 'react'
    import { Link } from 'react-router-dom'
import { FcMenu } from 'react-icons/fc'
import { AiOutlineCloseCircle  } from 'react-icons/ai'
import './Topbar.css'

const Topbar = ({ user }) => {
    const [isShowOption, setIsShowOption] = useState(false)

    const hideMenu = (e) => {
        const sidebar = document.querySelector('.topbar_wrapper')
        sidebar.style.display = 'none';
        const optionMenus = document.querySelectorAll('.top-center>ul>li')
        optionMenus.forEach(item => item.classList.remove('active'))
        if(e.target.tagName === ('A' || 'a')) {
            e.target.parentElement.classList.add('active')
        }
    }

    const showMenu = () => {
        const sidebar = document.querySelector('.topbar_wrapper')
        sidebar.style.display = 'flex';
    }

    return (
        <div className='topbar'>
            <FcMenu className='menu-icon' onClick={showMenu}/>
            <h3 className='app-title'>My Blog</h3>
            <div className='topbar_wrapper'>
                <div className='topbar_left'>
                    <span className='social-res'>My social:</span>
                    <a onClick={hideMenu} href='https://facebook.com/youngg.th' target='_blank'><i class="fa-brands fa-facebook"></i></a>
                    <a onClick={hideMenu} href='https://www.instagram.com/_hieuisme_/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    <a onClick={hideMenu} href='https://dribbble.com/' target='_blank'><i class="fa-solid fa-basketball"></i></a>
                    <a onClick={hideMenu} href='https://github.com/noname20011' target='_blank'><i class="fa-brands fa-github"></i></a>
                </div>
                <div className='topbar_center'>
                    <ul>
                        <li onClick={hideMenu}><Link to={'/'} >Home</Link></li>
                        <li onClick={hideMenu}><Link to={'/about'}>About</Link></li>
                        <li onClick={hideMenu}><Link to={'/contact'}>Contact</Link></li>
                        <li onClick={hideMenu}><Link to={'/create-blog'}>Write</Link></li>
                    </ul>
                </div>
                <div className='topbar_right'>
                    { user && (
                        <div className='user'>
                            <img  src={user.data.imageUrl || "https://th.bing.com/th/id/R.47c312098ede294e6657778f1f2013dd?rik=BKy6mLMk3Spc6g&pid=ImgRaw&r=0"} alt="" 
                                onClick={() => setIsShowOption(isShowOption => !isShowOption)} />
                                <span className='username-res'>{user.data.username}</span>
                            {isShowOption && (
                                <div className='option'>
                                    <ul>
                                        <Link to={'/login'}>
                                            <li onClick={() => localStorage.clear()}>Logout</li>
                                        </Link>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )} 
                    { !user && (
                        <Link to={'/login'}><button type='button' className='btn'>Login</button></Link>
                    )}
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <AiOutlineCloseCircle className='close-icon' onClick={hideMenu}/>
            </div>
        </div>
    )
}

export default Topbar
