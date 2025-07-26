import React from "react";
import './Menu.css'


const Menu = () => {
    return (
        <aside className="sidebar">
            <div className="theme">
                <div className="theme-toggle">
                    <img src="./public/images/theme-toggle.png" alt="theme-toggle" />
                </div>
            </div>
            <nav className="sidebar-nav">
                <div className="nav-item home">
                    <img src="./public/images/home.png" alt="images" className="nav-item-imgs"/>
                </div>
                <div className="nav-item user">
                    <img src="./public/images/user.png" alt="user" className="nav-item-imgs"/>
                </div>
                <div className="nav-item biznes">
                    <img src="./public/images/biznes.png" alt="biznes" className="nav-item-imgs"/>
                </div>
                <div className="nav-item news">
                    <img src="./public/images/news.png" alt="news" className="nav-item-imgs"/>
                </div>
                <div className="nav-item other">
                    <img src="./public/images/other.png" alt="other" className="nav-item-imgs"/>
                </div>
                <div className="nav-item search">
                    <img src="./public/images/search.png" alt="search" className="nav-item-imgs"/>
                </div>
            </nav>

            <div className="profile-menu">
                <img src="./public/images/to-personal-acc" alt="per-acc" />
                <p>Личный Кабинет</p>
            </div>
        </aside>
    )
}


export default Menu