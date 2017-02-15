import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import {connect} from 'react-redux'
import MultiSelect from './MultiSelect'

//А где сама фильтрация?
class App extends Component {
    state = {
        user: ''
    }

    render() {
        const {articles, selection} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter/>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <MultiSelect options={options} selection={selection} />
                <DateRange />
                <ArticleList articles={articles} />
                <Chart articles={articles}/>
            </div>
        )
    }

    handleUserChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user: ev.target.value
            })
        }
    }
}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => ({
    articles: state.articles,
    selection: state.value,
    dateRange: state.dateRange
}))(App)
