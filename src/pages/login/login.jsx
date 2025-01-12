import React,{useState,useContext} from "react";
import "../register/register.css";
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate} from "react-router-dom";
import Navbar from "../../components/navbar/navbar"


const Login =()=>{

    return(
        <div className="BgColor" >
                 <Navbar/>
          
          <div className="ffDS">
            <div className="Form_Divbb">
              
           <div className="Form_Div renttt pK">
               <form>
                  
                  <div className="welcome4 textAdmin">Login Here</div>
                  <div> <input type="email" placeholder="Email" className="Full_Name " name="email" /></div>
                  <div className="sers"> <input type="password" placeholder="Password" className="Full_Name " name="password" 
                  />
{/* <FontAwesomeIcon icon={faEye} className="PlusIcon plusIcon2 ser1" />:<FontAwesomeIcon icon={faEyeSlash} className="PlusIcon plusIcon2 ser1" /> */}
 </div>
                  <div className="loginn">Log In</div>
                  {/* {err && <p className="errorP">{err}</p>} */}
                  <p className="FofD">Forget password ? <a href="/" className="sesetP"><span className="ClickMe">Click Here</span></a> </p>
                  <div className="Or_with2">
                         <div className="Or_With"></div>
                         <p className="adColor">Or login with</p>
                         <div className="Or_With"></div>
                     </div>
                     <div className="loginn" >Sign in with Google</div>
                    
                     <p className="Have_An adColor">Don't have an account?</p>
                     <div className="LOGIN_HERE_NOW"><Link to="/register" className="p_LoGIn">Register Here</Link></div>
               </form>
           </div>
         
         
           </div>
           </div>
        
             
        </div>
    )
}

export default Login;