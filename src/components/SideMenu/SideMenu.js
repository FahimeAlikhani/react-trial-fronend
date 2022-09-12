import React from "react"
import MenuData from "./MenuData";
import MenuItem from "./MenuItem";
import "../../assets/styles/layout.css"
import Logo from "../../assets/images/logo.svg"
const SideMenu=()=>{

    return(
             <div>
                    <div className="logo">
                        <div className="textImg1">Logo</div>
                        <div className="textImg2">نام سازمان</div>
                        <div className="textImg3">توضیحات مختصر در چند کلمه </div>
                     </div>
                      
                <ul className="menudiv">
                    {MenuData.map((item)=>(
                        <MenuItem item={item} key={item.link} />
                    ))}
                </ul>
             </div>  
    )
}

export default SideMenu;