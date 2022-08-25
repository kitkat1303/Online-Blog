import SideBar from "../../components/sidebar/SideBar"
import "./settings.css"

export default function Settings() {
  return (
    <div className = "settings">
       <div className="settingsWrapper">
          <div className="settingsTitle">
             <span className="settingsUpdateTitle">Update Your Account</span>
             <span className="settingsDeleteTitle">Delete Account</span>

          </div>
          <form className="settingsForm" >
             <label>Profile Picture</label>
             <div className="settingsPP">
                <img src="https://th.bing.com/th/id/R.42c4eeb58d71bae3f3db311481ef3028?rik=BO%2b2NOne93qMXQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f03%2f28%2f425586-nature-landscape-mountains-trees-forest-sunset-mist.jpg&ehk=0OV1BqPtXut3L%2fFg%2f6kHsY496avZ6WZLmW7bz%2brPj3s%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id = "fileInput" style = {{display: "none"}} />
             </div>
             <label Username></label>
             <input type="text" placeholder = "Katarina" />

             <label Email></label>
             <input type="email" placeholder = "katarina.mcgaughy@gmail.com" />

             <label Password></label>
             <input type="password"  />
             <button className="settingsUpdate">Update</button>
          </form>
       </div>
       <SideBar/>
    </div>
  )
}
