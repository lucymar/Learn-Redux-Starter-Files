//a reducer takes in 2 things:
//1: the current state
//2: the action (info about what happened)


//it will take in what happened, and return an updated copy of store accounting for the event

const postReducer = (state = [], action) => {
    switch (action.type){
        case 'INCREMENT_LIKES' : 
            //return updated state
            console.log('incrementing likes!')
            const i = action.index
            return [...state.slice(0,i),{...state[i], likes: state[i].likes + 1},...state.slice(i + 1)]
        
        default: {
            return state;
        }
    }
}

export default postReducer