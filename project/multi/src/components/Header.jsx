import bg from "../assets/images/bg-sidebar-mobile.svg"
import "./Header.css"
import Stepper from "./Stepper"
const Header = () =>{
    return(
        <div className="header">
            
            {/* <img src={bg} alt="screen background" /> */}
            <Stepper />
        </div>
    )
}
export default Header