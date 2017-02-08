import React, {Component, PropTypes} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(React.PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            comments: PropTypes.array
        })).isRequired,
        toggleOpen: PropTypes.func.isRequired
        //еще accordionOpenId
    }

    render() {
        const {articles, accordionOpenId, toggleOpen} = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == accordionOpenId}
                toggleOpen={toggleOpen(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}

export default accordion(ArticleList)
