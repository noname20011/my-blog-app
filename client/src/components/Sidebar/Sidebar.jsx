import React from 'react'
import './Sidebar.css'
import AboutImg from '../../asset/about me 1.jpg'

const Sidebar = () => {
    window.onscroll = (e) => {
        const sidebar = document.querySelector('.about')
        if(e.target.defaultView.pageYOffset + 30 > sidebar.offsetTop) {
            console.log(123);
            sidebar.style.top = `120px`;
            sidebar.style.position = 'sticky'
        }
    }

    return (
        <div className='about'>
            <div className="about-section">
                <h1 className="about_title">About me</h1>
                <img src={AboutImg} alt="about me" className="about_img" />
                <p className="about_desc">My name is Dam Luu Trung Hieu, i was born on 20/05/2001. My dreams is a developers full stack, bla bla... </p>
            </div>
            <div className="about_section">
                <h3 className="about_title">Hobbies</h3>
                <ul className="list">
                    <li className="list_item">Hang out</li>
                    <li className="list_item">Listen music</li>
                    <li className="list_item">Travel</li>
                    <li className="list_item">Play football</li>
                    <li className="list_item">Tech</li>
                    <li className="list_item">Read book</li>
                </ul>
            </div>
            <div className="about_section">
                <h3 className="about_title">Follow me</h3>
                <div className='about_social'>
                    <a href='https://facebook.com/youngg.th' target='_blank'><i class="fa-brands fa-facebook"></i></a>
                    <a href='https://www.instagram.com/_hieuisme_/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://dribbble.com/' target='_blank'><i class="fa-solid fa-basketball"></i></a>
                    <a href='https://twitter.com' target='_blank'><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar