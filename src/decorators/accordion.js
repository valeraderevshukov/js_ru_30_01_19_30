import React from 'react'
export default (Component) => class WrappedComponent extends React.Component {

    state = {
        accordionOpenId: null
    }

    toggleOpen = accordionOpenId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        
        if (this.state.accordionOpenId == accordionOpenId) {
            this.setState({
                accordionOpenId: null
            })
            // console.log(this.state.accordionOpenId)
        }
        else {
            this.setState({
                accordionOpenId
            })
            // console.log(this.state.accordionOpenId)
        }
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
    }
}