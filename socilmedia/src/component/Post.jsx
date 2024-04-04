import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/Post-list-store";
import { useContext } from "react";

const Post =({post})=>{
  const {deletePost} = useContext(PostList);

    return(
        <div className="card" style={{width: "18rem"}}>
        
        <div className="card-body">
          <h5 className="card-title">{post.id}
          <span onClick={()=>deletePost(post.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <AiFillDelete />
          
        </span>
          </h5>
          <p className="card-text">{post.title}</p>
          <a href="#" className="btn btn-primary">{post.body}</a>
          {post.tags.map((tag)=>
          <span key={tag} className="badge tags text-bg-primary">{tag}</span>)}
          <div>{`total reactions ${post.reactions}`}</div>
        </div>
      </div>

    )
}
export default Post