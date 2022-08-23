import React from "react"
import "../assets/styles/SideMenu.css"
import Logo from "../assets/images/logo.svg"
import Home from "../assets/images/Home.svg"
const MenuItem=()=>{
    
return(
    <div className="menu">
        <div className="page"></div>
        <div className="menuBoard">
        <div className="logo">
            <img src={Logo}></img>
        </div>
        <div className="menudiv">
        <div className="menuItem">منوی شماره 1
        <img src={Home}/>
        </div>
        <div className="menuItem">منوی شماره 2</div>
        <div className="menuItem">منوی شماره 3</div>
        <div className="menuItem">منوی شماره 4</div>
        </div>
        </div>
        
    </div>

)
}

export default MenuItem;