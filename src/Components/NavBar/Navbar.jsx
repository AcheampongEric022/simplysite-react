import "./navbar.css"
import logo from "../../images/mainlogo.png"
import menu from "../../images/menu-icon.png"
import { useEffect, useState } from "react";

function Navbar(){
    const [sticky,setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);
    const [mobileMenu, setMobilemenu] = useState(false);
    function toggleMenu(){
        mobileMenu ? setMobilemenu(false) :  setMobilemenu(true);
    }

    return(
      
        <nav className={`container ${sticky? "navbar": ""}`}>
            <img className="logo" src={logo} alt="" />
            <ul className={mobileMenu? "": "hide-mobile-menu"}>
                <li><a href="#Hero">Home</a></li>
                <li><a href="#Programs">Program</a></li>
                <li><a href="#About">About Us</a></li>
                <li><a href="#Campus">Campus</a></li>
                <li><a href="#Testimonials">Testimonials</a></li>
                <li><button className="btn"><a href="#Contact">Contact Us</a></button></li>
            </ul>

            <img onClick={toggleMenu} src={menu} alt="" className="menuIcon"/>
        </nav>
      
        
    );
}

export default Navbar