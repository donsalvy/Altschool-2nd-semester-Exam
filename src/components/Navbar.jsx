import { FaGithub } from "react-icons/fa"
import salvy from "../assets/salvy.jpg" 
import { FaSearch } from "react-icons/fa";    
 
import { MdDarkMode } from "react-icons/md"                                                                                                           

function Navbar() {
    return (


        
        <div className="navbar">
            <img src={salvy} alt="" />


            <FaGithub className="github-icon"/>

            <h1>SALVATION'S GITHUB PROFILE</h1>

            <ul>
                <li>Home</li>
                <li>Projects</li>
            </ul>

            {/* <div className="search-box">
                <input type="text" placeholder="search and filter..." />
                <FaSearch className="search-icon"/>
            </div> */}

            

        </div>
    )

}

export default Navbar 