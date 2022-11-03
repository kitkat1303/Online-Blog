import "./topbar.css"
import {Link} from "react-router-dom";

export default function TopBar() {

  const user = false;
  return (
    <div className = "top">
       <div className = "topLeft">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          </div>
       <div className="topCenter">
         <ul className = "topList">
        
           <li className = "topListItem"> 
           <Link className = "link" to= "/" >HOME</Link> </li>
           <li className = "topListItem"> <Link className = "link" to= "/" >ABOUT</Link> </li>
           <li className = "topListItem"> <Link className = "link" to= "/" >CONTACT</Link> </li>
           <li className = "topListItem"> <Link className = "link" to= "/write" >WRITE</Link> </li>

           <li className = "topListItem"> {user && "LOGOUT"} </li>
         </ul>
       </div>

       <div className="topRight">
         {
           user ? (
            <img className = "topImage" 
         src = "https://th.bing.com/th/id/R.42c4eeb58d71bae3f3db311481ef3028?rik=BO%2b2NOne93qMXQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f03%2f28%2f425586-nature-landscape-mountains-trees-forest-sunset-mist.jpg&ehk=0OV1BqPtXut3L%2fFg%2f6kHsY496avZ6WZLmW7bz%2brPj3s%3d&risl=&pid=ImgRaw&r=0" alt= "" />
           ) : (
             <ul className = "topList">
              <li className = "topListItem">
              <Link className = "link" to= "/login" >LOGIN</Link>
              </li>
              <li className = "topListItem">
              <Link className = "link" to= "/register" >REGISTER</Link>
              </li>
            </ul>
           )
         }
  
         <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
       </div>

       </div>
  );
}
