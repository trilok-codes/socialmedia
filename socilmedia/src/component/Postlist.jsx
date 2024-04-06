import Post from "./Post"
import { PostList as PostListData } from "../store/Post-list-store"
import { useContext } from "react"
import Welcomemessage from "./Welcomemessage";


const Postlist= () => {
    const {postList,addinitialPosts} = useContext(PostListData);
    console.log(postList)
    const handlepostclick=()=>{
        fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(data => {addinitialPosts(data.posts)});

    };
    return (
        <>
        {postList.length === 0 && <Welcomemessage postclick={handlepostclick}/>}
        {postList.map((post)=>(
            <Post key={post.id} post={post}></Post>))

        }
        </>
    );
};
export default Postlist