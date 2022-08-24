import React from "react"
import "../assets/styles/layout.css"
import Logo from "../assets/images/logo.svg"
import Home from "../assets/images/Home.svg"
import Message from "../assets/images/Message.svg"
const MenuItem=()=>{
    
return(
    <div className="menuBoard">
        <div className="logo">
            <img src={Logo}></img>
        </div>
        <div className="menudiv">
            <div className="menuItem">
                <img className="img" src={Home}/>
                <div className="text" >منوی پنل شماره 1</div>
            </div>
            <div className="menuItem">
                <img className="img" src={Message}/>
                <div className="text" >منوی پنل شماره 2</div>
            </div>
            <div className="menuItem">
                <img className="img" src={Home}/>
                <div className="text" >منوی پنل شماره 3</div>
            </div>
            <div className="menuItem">
                <img className="img" src={Home}/>
                <div className="text" >منوی پنل شماره 4</div>
            </div>
            <div className="menuItem">
                <img className="img" src={Home}/>
                <div className="text"> منوی پنل شماره 5</div> 
            </div>
    </div>

</div>    
 
)
}

export default MenuItem;