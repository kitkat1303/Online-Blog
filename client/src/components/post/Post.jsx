import "./post.css"

export default function Post() {
  return (
    <div className = "post">
       <img className = "postImage" src="https://images.pexels.com/photos/6794043/pexels-photo-6794043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <div className="postInfo">
          <div className="postCat">
             <span className="postCat">Music</span>
             <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
          <hr />
          <span className="postDate">1 hour ago</span>
       </div>
       <p className = "postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur, aspernatur repellat suscipit commodi atque dolores nemo esse provident quos molestias officia dolore cupiditate a illum inventore dolor laboriosam facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur, aspernatur repellat suscipit commodi atque dolores nemo esse provident quos molestias officia dolore cupiditate a illum inventore dolor laboriosam facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur, aspernatur repellat suscipit commodi atque dolores nemo esse provident quos molestias officia dolore cupiditate a illum inventore dolor laboriosam facilis.
       </p>
       </div>
  )
}
