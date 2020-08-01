import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>JorgeGWD &copy; {new Date().getFullYear()}</p>
            </div> 
        </footer>
    )
}
