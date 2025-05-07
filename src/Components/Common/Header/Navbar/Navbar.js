import { useRef } from 'react'
import './Navbar.css'
import IconMenu from '../../../../assets/images/icon-menu.svg'
import IconClose from '../../../../assets/images/icon-close.svg'

const Navbar = () => {
    const checkboxRef = useRef(null)

    const closeMenu = () => {
        if (checkboxRef.current) {
            checkboxRef.current.checked = false;
        }
    }

    return (
        <nav>
            <input type="checkbox" id="check" ref={checkboxRef} />
            <label htmlFor="check" className="navbar__content-checkbtn">
                <img src={IconMenu} alt="Menu" className='open-menu' />
                <img src={IconClose} alt="Close" className='close-menu' />
            </label>
            <div className="navbar__content-menu">
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#experience" onClick={closeMenu}>Experience</a>
                <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar