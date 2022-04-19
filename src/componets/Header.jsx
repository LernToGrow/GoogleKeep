import React from "react";
import logo from '../images/keepnotelogo.png';
const Header =()=>{
   return(
       <>
        <div className="header">
            <img src={logo} alt="logo" width='70px' height="50px"/>
            <h1 className="header-name">KeepNote</h1>
        </div>
       </>
   ) 
}
export default Header;