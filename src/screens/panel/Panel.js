import React from "react";
import '../../assets/styles/layout.css';
import MenuBar  from "../../components/menuBar";
import SideMenu from "../../components/SideMenu";

const Panel=()=>{

    return(
        <div className="page">
             <SideMenu />
             <MenuBar/>
        </div>
    )
}

export default Panel;