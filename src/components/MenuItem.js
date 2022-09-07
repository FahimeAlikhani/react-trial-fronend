import React from "react"
import "../assets/styles/layout.css"
import Logo from "../assets/images/logo.svg"
import Home from "../assets/images/Home.svg"
import Message from "../assets/images/Message.svg"
import Setting from "../assets/images/Setting.svg"
import img_1 from "../assets/images/Image_1.svg"
import duc from "../assets/images/Document.svg"
const MenuItem=()=>{
    
return(
    <div className="menuBoard">
        <div >
            <img className="logo" src={Logo} />
            <div className="textImg1">Logo</div>
            <div className="textImg2">نام سازمان</div>
            <div className="textImg3">توضیحات مختصر در چند کلمه </div>
        </div>
        <div className="menudiv">
            <div className="menuItem">
                <img className="img" src={Home}/>
                <div className="text" >  منوی پنل شماره1 </div>
            </div>
            <div className="menuItem">
                <img className="img" src={Message}/>
                <div className="text" >منوی پنل شماره 2</div>
            </div>
            <div className="menuItem">
                <img className="img" src={Setting}/>
                <div className="text" >منوی پنل شماره 3</div>
            </div>
            <div className="menuItem">
                <img className="img" src={img_1}/>
                <div className="text" >منوی پنل شماره 4</div>
            </div>
            <div className="menuItem">
                <img className="img" src={duc}/>
                <div className="text"> منوی پنل شماره 5</div> 
            </div>
    </div>

</div>    
 
)
}

export default MenuItem;