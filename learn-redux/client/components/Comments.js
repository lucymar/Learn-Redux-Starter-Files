import React from 'react';

const Comments = React.createClass({
    renderComment(comment, idx){
        return (
            <div className='comment' key={idx}>
            <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button onClick={this.props.removeComment.bind(null, this.props.params.postId, idx)} className='remove-comment'>&times;</button>
            </p>
            </div>
        )
    },

    handleSubmit(evt){
        evt.preventDefault()
        const postId = this.props.params.postId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment)
        this.refs.commentForm.reset()
    },
    render(){
    return (
        <div className='comments'>
        {this.props.postComments.map(this.renderComment)}
        <form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
            <input type='text' ref='author' placeholder='author' />
            <input type='text' ref='comment' placeholder='comment'/>
            <input type='submit' hidden />
        </form>
        </div>
    )
}})



export default Comments