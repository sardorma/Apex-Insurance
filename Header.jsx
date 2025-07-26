import React from "react";
import './Header.css'


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="./public/images/logo.png" alt="logo" />
            </div>

            <nav className="nav">
                <div className="e-polis">
                    <img src="./public/images/e-polis.png" alt="" />
                    <p>Оформить E-polis</p>
                </div>
                <div className="takaful">
                    
                </div>
            </nav>
        </header>
    )
}

export default Header