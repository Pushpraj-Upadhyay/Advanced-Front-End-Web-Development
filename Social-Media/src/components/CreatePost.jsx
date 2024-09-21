import { useContext, useRef } from "react";
import { PostListContext } from "../store/PostList-Context";

const CreatePost = () => {

    const { addPost } = useContext(PostListContext);

    const userId = useRef();
    const title = useRef();
    const body = useRef();
    const tags = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userIdValue = userId.current.value;
        const titleValue = title.current.value;
        const bodyValue = body.current.value;
        const tagsValue = tags.current.value;

        addPost(userIdValue, titleValue, bodyValue, tagsValue.split(" "));
        userId.current.value = "";
        title.current.value = "";
        body.current.value = "";
        tags.current.value = "";
    }

    return (
        <form className="form-data" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User Id</label>
                <input type="text" className="form-control" id="userId" placeholder="Enter User Id here" ref={userId} />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Title places here" ref={title} />
            </div>
            <div className="mb-3">
                <label htmlFor="bodyText" className="form-label">Content</label>
                <textarea type="text" rows="5" className="form-control" id="bodyText" placeholder="Describe more..." ref={body} />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="text" className="form-control" id="tags" placeholder="Enter tags using spaces" ref={tags} />
            </div>
            <button type="submit" className="btn btn-primary">Publish</button>
        </form>
    )
};

export default CreatePost;