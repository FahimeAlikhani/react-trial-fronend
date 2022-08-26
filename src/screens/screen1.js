import React from "react"
import "../assets/styles/screen1.css";
import Msg from "../assets/images/massageTitle.svg"
import User3 from "../assets/images/3 User.svg"
import Msg2 from "../assets/images/Message2.svg"
const Screen1 =()=>{

    return(
        <div >          
            <div id="option1">
                 <div id="title1">  تعداد در خواست ها : </div>
                 <div id="num1">5</div>
                 <div > <img className="image" src={Msg}/> </div>
           </div>
            <div id="option2"> 
                <div id="title2"> تعداد بازدید های امروز :</div>
                <div  id="num2">528</div>
                <div id="image2"><img src={User3} /></div>
            </div>
            <div id="option3"> 
            <div id="title3">ایمیل شما: </div>
            <div id="imail">example@info.com</div>
            <img id="image3" src={Msg2}/>
            </div>
        </div>
) 
}

export default Screen1;







