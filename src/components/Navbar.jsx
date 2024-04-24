

import { useState } from "react";
import salvy from "../assets/salvy.jpg";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        style={{
          height: "10%",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          backgroundColor: "#5c006c",
          color: "#f4c828", 
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: 999,
        }}
      >
        <div>
          <img
            src={salvy}
            alt=""
            style={{ height: "40px", borderRadius: "50%" }}
          />
          
        </div>
        <div>
           
<h1 className="d-none">SALVATION'S GITHUB PROFILE</h1></div>
       
        <div className="d-lg-none">
          {isMobileMenuOpen ? (
            <>
              <FiX
                onClick={toggleMobileMenu}
                style={{ fontSize: "24px", cursor: "pointer" }}
              />
              <div
                style={{
                  position: "fixed",
                  top: "10%",
                  left: 0,
                  width: "100vw",
                  height: "90vh",
                  backgroundColor: "#5c006c",
                  color: "#f4c828", 
                  zIndex: 999,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
              >
               <ul className="d-flex col">
                  <li>
                    <NavLink
                      to="/"
                      activeClassName="active"
                      onClick={toggleMobileMenu}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/projects"
                      activeClassName="active"
                      onClick={toggleMobileMenu}
                    >
                      Projects
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <FiMenu
              onClick={toggleMobileMenu}
              style={{ fontSize: "24px", cursor: "pointer" }}
            />
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;



// import { FaGithub } from "react-icons/fa"
// import salvy from "../assets/salvy.jpg" 
// import { FaSearch } from "react-icons/fa";    
 
// import { MdDarkMode } from "react-icons/md"                                                                                                           

// function Navbar() {
//     return (


        
//         <div className="navbar">
//             <img src={salvy} alt="" />


//             <FaGithub className="github-icon"/>

//             <h1>SALVATION'S GITHUB PROFILE</h1>

//             <ul>
//                 <li>Home</li>
//                 <li>Projects</li>
//             </ul>

//             {/* <div className="search-box">
//                 <input type="text" placeholder="search and filter..." />
//                 <FaSearch className="search-icon"/>
//             </div> */}

            

//         </div>
//     )

// }

// export default Navbar 