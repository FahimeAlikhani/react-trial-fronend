import React from "react";
import '../../assets/styles/layout.css';
import MenuBar  from "../../components/menuBar";
import SideMenu from "../../components/SideMenu/SideMenu";

const Panel=(props)=>{

    return(
        <div className="contentPage">
             <SideMenu />
             <main>
              <div>
                <MenuBar/>
                </div>  
              <div className="panel">
                {props.children}
              </div>
             </main>
        </div>
    )
}

export default Panel;