import { FaGithub } from "react-icons/fa"
import salvy from "../assets/salvy.jpg"                                                                                                                 

function Navbar() {
    return (


        
        <div className="navbar">
            <img src={salvy} alt="" />
            <FaGithub className="github-icon"/>
            <h1>SALVATION'S GITHUB PROFILE</h1>

        </div>
    )

}

export default Navbar 