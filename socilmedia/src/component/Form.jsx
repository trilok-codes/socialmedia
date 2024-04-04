import { useContext, useRef } from "react"
import { PostList } from "../store/Post-list-store";

const Form =()=>{
const {addPost}= useContext(PostList)

  const idelement=useRef();
  const titleelement=useRef();
  const bodyelement=useRef();
  const reactionselement=useRef();
  const tagselement=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const posttitle = titleelement.current.value;
    const postid= idelement.current.value;
    const postbody=bodyelement.current.value;
    const posttags=tagselement.current.value.split(/(\s+)/);
    const postreactions= reactionselement.current.value;

addPost(posttitle,postbody,postid,postreactions,posttags);
  }



    return (

        <form className="form" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post title</label>
    <input ref={ titleelement} type="text" className="form-control" id="title"placeholder="Title of your post" />
    </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label"> Post Content</label>
    <textarea ref={bodyelement} rows="4" type="text" className="form-control" id="body" placeholder="Content of your post" />
    </div>
  <div className="mb-3">
    <label htmlFor="id" className="form-label">User Id</label>
    <input ref={idelement} type="text" className="form-control" id="id" placeholder="Id of your Post" />
    </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Reactions</label>
    <input ref={reactionselement} type="text" className="form-control" id="reactions" />
    </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input ref={tagselement}type="text" className="form-control" id="tags"placeholder="Please enter tags " />
    </div>
  
  <button type="submit" className="btn btn-primary">Create</button>
</form>
    )
}
export default Form