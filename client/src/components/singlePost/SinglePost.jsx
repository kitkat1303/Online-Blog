import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className = "singlePost">
       <div className="singlePostwrapper">
          <img className = "singlePostImg" src="https://images.pexels.com/photos/6906625/pexels-photo-6906625.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          <h1 className="singlePostTitle">Lorem ipsum dolor
          <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
          </h1>
          <div className="singlePostInfo">
             <span className = "singlePostAuthor">Author: <b>Katarina</b></span>
             <span className = "singlePostDate"> 1 hour ago</span>
          </div>
          <p className = "singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla deleniti nobis animi suscipit libero. Voluptate necessitatibus dolores expedita distinctio voluptates saepe, quisquam est! Esse provident ullam cupiditate eveniet eaque dolorem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla deleniti nobis animi suscipit libero. Voluptate necessitatibus dolores expedita distinctio voluptates saepe, quisquam est! Esse provident ullam cupiditate eveniet eaque dolorem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla deleniti nobis animi suscipit libero. Voluptate necessitatibus dolores expedita distinctio voluptates saepe, quisquam est! Esse provident ullam cupiditate eveniet eaque dolorem?</p>
       </div>
       </div>
  )
}
