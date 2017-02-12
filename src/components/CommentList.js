import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    }
    static defaultProps = {
        comments: []
    }
    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
       // console.log('---', this.props, nextProps)
    }


    componentWillUnmount() {
        //console.log('---', 'unmounting')
    }

    state = {
        isOpen: false
    }

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
                {this.commentFrom()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {comments} = this.props
        if (!comments.length) return <h3>No comments yet</h3>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return <ul>{commentItems}</ul>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    commentFrom() {
        if (!this.state.isOpen) return null;

        return <form onSubmit={this.handleSubmit} style={{marginLeft: '25px'}}>
            <input type="text" name="user" placeholder="User" 
                style={{
                width: '300px', 
                marginTop: '30px', 
                display: 'block'}}/>
            <textarea name="comment" placeholder="Comment" 
                style={{
                    width: '300px', 
                    marginTop: '10px', 
                    display: 'block'}}/>
            <button type="submit" style={{marginTop: '10px' }}>add comment</button>
        </form>;
    }
    handleSubmit = (ev) => {
        // console.log('user -' + ev.target.user.value, 'comment -' + ev.target.comment.value);
        ev.target.reset();
        ev.preventDefault();
    }
}

export default CommentList