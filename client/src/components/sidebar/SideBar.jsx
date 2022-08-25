import "./sidebar.css"

export default function SideBar() {
  return (
    <div className = "sidebar">
       <div className = "sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://images.pexels.com/photos/4982737/pexels-photo-4982737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellendus sed. </p>
       </div>
       <div className="sidebarItem">
          <span className = "sidebarTitle">CATEGORIES</span>
          <ul className = "sidebarList">
             <li className="sidebarListItem">Life</li>
             <li className="sidebarListItem">Music</li>
             <li className="sidebarListItem">Style</li>
             <li className="sidebarListItem">Sport</li>
             <li className="sidebarListItem">Cinema</li>
             <li className="sidebarListItem">Tech</li>
          </ul>
       </div>
       <div className="sidebarItem">
      <span className = "sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
         <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
      </div>
       </div>
       </div>
  )
}
