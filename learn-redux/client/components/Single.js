import React from 'react';
import Photo from './Photo';
import Comments from './Comments'

const Single = React.createClass({
    render() {
        //index of post
        //post itself
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        console.log('index', i)
        
        const post = this.props.posts[i]
        console.log('post', post)
        const postComments = this.props.comments[this.props.params.postId] || [];


        return (
            <div className="single-photo">
                    <Photo i={i} post={post} {...this.props} />
                    <Comments postComments={postComments} {...this.props}/>
            </div>
        )
    }
})

export default Single;