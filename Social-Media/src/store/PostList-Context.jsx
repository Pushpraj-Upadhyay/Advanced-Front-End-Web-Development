import { createContext, useReducer } from "react";

export const PostListContext = createContext(
    {
        postList: [],
        addPost: () => { },
        deletePost: () => { },
    }
);

const postReducer = (currPostList, action) => {
    let newPostList = currPostList;

    if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currPostList];
    }
    else if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(post => post.id != action.payload.id);
    }
    return newPostList;
};

const PostListContextProvider = ({ children }) => {

    const [postList, dispatchPost] = useReducer(postReducer, []);

    const addPost = (userId, title, body, tags) => {
        const actionObj = {
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                userId,
                title,
                body,
                tags,
            },
        }
        dispatchPost(actionObj);
    };

    const deletePost = (id) => {
        const actionObj = {
            type: "DELETE_POST",
            payload: {
                id,
            },
        }
        dispatchPost(actionObj);
    };

    return (
        <PostListContext.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostListContext.Provider>
    )
};

export default PostListContextProvider;