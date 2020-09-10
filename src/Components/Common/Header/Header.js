import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import Logo from './Logo/Logo'
import Codes from './Codes/Codes'

const Header = () => {

    const [ sticky, setSticky ] = useState({ isSticky: false, offset: 0 });

    const ref = useRef(null);

    const handleScroll = () => {
        if (window.pageYOffset > 0 ) {
          setSticky({ isSticky: true });
        } else {
          setSticky({ isSticky: false, offset: 0 });
        }
    };

      useEffect(() => {
        var header = ref.current.getBoundingClientRect();
        const handleScrollEvent = () => {
          handleScroll(header.top, header.height)
        }
       
        window.addEventListener('scroll', handleScrollEvent);
       
        return () => {
          window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

  return (
    <header className={`header${sticky.isSticky ? ' sticky' : ''}`} ref={ref}>
        <div className="main-header">
            <Logo />
            <Codes />
        </div>
    </header>
  )
}

export default Header

