import React, { Component } from 'react'

function Comment(props) {
    const {text, user} = props.comment
    return (
        <div>
            {text}
            {user && <b> by {user}</b>}
        </div>
    )
}
export default Comment

Comment.propTypes = {
	comment:  React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		user: React.PropTypes.string.isRequired
	})
}