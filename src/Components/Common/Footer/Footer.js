import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer__content">
                <p>JorgeGWD | Jorge Graphic & Web Designer</p>
                <p>{new Date().getFullYear()}</p>
            </div> 
        </footer>
    )
}
