import { LOGO_URL } from "../utils/constants"
import { useState } from "react"

// Header Component

const Header = () =>{

    // Local State variable
    const [btnNameReact, setbtnNameReact] = useState("Login")
    console.log("Header Rendered!")

    return(
        <>
            <nav>
                <div className="container nav__container">
                    <a className="nav__logo"><img src={LOGO_URL} /></a>
                    <ul className="nav__items">
                        <li><a>Signup</a></li>
                        <li>
                            <button onClick={()=>{
                                btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                            }}>
                            {btnNameReact}</button>
                        </li>
                        <li><a><span><i class="uil uil-shopping-cart-alt"></i></span> Cart</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header