import React from "react";
import '../../assets/styles/layout.css';
import MenuBar  from "../../components/menuBar";
import SideMenu from "../../components/SideMenu";

const Panel=()=>{

    return(
        <div className="contentPage">
             <SideMenu />
             <MenuBar/>
        </div>
    )
}

export default Panel;