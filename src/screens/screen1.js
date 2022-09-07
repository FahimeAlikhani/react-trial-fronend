import React from "react"
import "../assets/styles/screen1.css";
import Msg from "../assets/images/massageTitle.svg"
import User3 from "../assets/images/3 User.svg"
import Msg2 from "../assets/images/Message2.svg"
const Screen1 =()=>{

    return(
        <div >          
            <div className="option1">
                 <div className="title1">  تعداد در خواست ها : </div>
                 <div className="num1">5</div>
                 <div > <img className="image" src={Msg}/> </div>
           </div>
            <div className="option2"> 
                <div className="title2"> تعداد بازدید های امروز :</div>
                <div  className="num2">528</div>
                <div className="image2"><img src={User3} /></div>
            </div>
            <div className="option3"> 
            <div className="title3">ایمیل شما: </div>
            <div className="imail">example@info.com</div>
            <img className="image3" src={Msg2}/>
            </div>
        </div>
) 
}

export default Screen1;







