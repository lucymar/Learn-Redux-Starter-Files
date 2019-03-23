//ACTION CREATORS = OBJECT THAT HAS 2 THINGS
//1: WHAT HAPPENED
//2: WHAT NEEDS TO CHANGE


//increment
export const increment = (index) => {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
//add comment
export const addComment = (postId, author, comment) => {
    console.log('dispatching test')
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment
export const removeComment = (postId, idx) => {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        idx
    }
}