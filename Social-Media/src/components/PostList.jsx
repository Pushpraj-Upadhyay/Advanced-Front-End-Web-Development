import { useContext } from "react";
import { PostListContext } from "../store/PostList-Context";
import Post from "./Post";
import EmptyMessage from "./EmptyMessage";

const PostList = () => {
    const { postList } = useContext(PostListContext);
    return (
        <>
            {postList.length === 0 && <EmptyMessage></EmptyMessage>}
            <div className="posts">
                {postList.map((post) => (
                    <Post post={post} key={post.id}></Post>
                ))}
            </div>
        </>
    )
};

export default PostList;