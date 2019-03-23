import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from './Main';

//connect takes the state we want, which are the comments and posts
//and the dispatch, which are the action creators we want

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        comments: state.comments
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main)
export default App;