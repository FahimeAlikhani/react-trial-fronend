import React,{lazy} from "react";
import {Route,Routes,BrowserRouter,Navigate} from "react-router-dom";
import Panel from "./screens/panel/Panel";
import ProtectRoutes from "./ProtectRoutes";


const AppRouter=()=>{

    return(
        <BrowserRouter>
            <Panel >
            <Routes>
                {ProtectRoutes.map((item)=>{
                    const Component =item.component; 
                    return( 
                    <Route 
                    key={item.key}
                    path={item.path}
                    element={<Component />}
                    exact={item.exact} />
                )})}
                <Route path="/" element={<Navigate to="/panel"/>} />
            </Routes>
            </Panel>
        </BrowserRouter>
    )
}

export default AppRouter;