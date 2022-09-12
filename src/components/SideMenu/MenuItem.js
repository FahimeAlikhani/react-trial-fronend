import React from "react"

import { useLocation, useNavigate } from "react-router-dom"

const MenuItem=({item})=>{
    const navigate=useNavigate(); 
    const pathName=useLocation();
    return(

    <li onClick={()=>navigate(item.link)}

        className="menuItem">
            <img className="img" src={item.image}/>
            <div className="text" >
                {item.title}
            </div>
    </li>
//     <div className="menuBoard">
//         
//         <div className="menudiv">
//             <div className="menuItem">
                
//                 <div className="text" > </div>
//             </div>
            
//     </div>

// </div>    
 
)
}

export default MenuItem;