import React from "react";
import '../../assets/styles/layout.css';
import MenuBar  from "../../components/menuBar";
import SideMenu from "../../components/SideMenu/SideMenu";

const Panel=(props)=>{

    return(
        <div className="contentPage">
             <SideMenu />
             <main className="panel">
              <MenuBar/>
              <div className="panelPage">
                {props.children}
              </div>
             </main>
        </div>
    )
}

export default Panel;