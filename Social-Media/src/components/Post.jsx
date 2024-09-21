import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../store/PostList-Context";

const Post = ({ post }) => {

    const { deletePost } = useContext(PostListContext);

    return (
        <div className="card text-center post">
            <div className="card-header alert alert-primary">
                <h2>{post.title}</h2>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-button" onClick={() => deletePost(post.id)}>
                    <AiFillDelete />
                </span>
                {/* <span className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill bg-success">
                    99+
                </span> */}
            </div>
            <div className="card-body">
                <pre className="card-text post-content">{post.body}</pre>
                {post.tags.map((tag) => (
                    <span className="badge text-bg-primary tags" key={tag}>{tag}</span>
                ))}
            </div>
            <div>{`Posted by : ${post.userId}`}</div>
        </div>
    )
};

export default Post;