import React, {Component} from 'react'

//Компонент становиться очень большим, лучше разбить его на более мелкие: Article, CommentList и Comment
export default class Article extends Component {

    state = {
        isOpen: false,
        btnOpen: false
    }

    render() {
        const {article} = this.props
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        return (
            <section>
                {this.props.article.text}
                {this.createButton()}
                {this.getComments()}
            </section>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getComments() {
        if ( !this.state.btnOpen ) return
        return ( 
            this.props.article.comments.map(( item ) => 
                <div key={ item.id }>
                    <hr/>
                    <h4>{ item.user }</h4>
                    <p>{ item.text }</p>
                </div>
            )
        )
    }

    createButton() {
        if ( !this.props.article.comments ) return
        return (
            <div>
                <hr/>
                <button onClick={ this.btnClick } type="button">{ this.getButtonText() } ({this.props.article.comments.length})</button>
            </div>
        )
    }

    btnClick = (ev) => {
        this.setState({
            btnOpen: !this.state.btnOpen
        })
    }

    getButtonText() {
        return ( !this.state.btnOpen ) ? 'show comments' : 'hide comments'
    }
}
