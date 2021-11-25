import { ADD_POSTS, GET_POSTS, EDIT_POST, DELETE_POST, ADD_LIKE } from "../actions/post.action";

const initialState = {};

export default function postReducer(state=initialState,action ){
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case ADD_POSTS:
            return [action.payload, ...state]; // on rajoute le nouveau post dans la bdd
        case EDIT_POST:
            return state.map((post)=>{
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        content: action.payload.content,
                    };
                }else return post; // si non sa le supprime du store
            }); 
        case DELETE_POST:
             return state.filter((post)=> post.id !== action.payload.postId);
        case ADD_LIKE:
            return state.map((post)=>{
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        likes: action.payload.likes,
                    };
                }else return post; // si non sa le supprime du store
            }); 
        default:
           return state;
    }
}
