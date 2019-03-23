//a reducer takes in two things
//1: copy of the current state
//2. the action (info about what happened)


const commentsReducer = (state = [], action) => {
    if (typeof action.postId !== 'undefined'){
        return {
            //take current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postCommentsReducer(state[action.postId], action)
        }
    }
    return state;
}

const postCommentsReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_COMMENT' :
            //return existing state + the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }]
        case 'REMOVE_COMMENT' :
            //we need to return the state wihtout the deleted comment
            return [
                //from the start to the one we want to delete
                ...state.slice(0, action.idx),
                //after the deleted on, to the end
                ...state.slice(action.idx + 1)
            ]
        default:
            return state
    }
    return state
}

export default commentsReducer