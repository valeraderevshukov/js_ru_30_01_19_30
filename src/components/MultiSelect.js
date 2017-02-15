import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import { selectFilter } from '../AC'

class MultiSelect extends Component {

	render() {
		let {options} = this.props
		return (
			<Select options={this.props.options} onChange={this.handleSelectChange} value={this.props.selection} multi/>
		)
	}
	handleSelectChange = selection => {
		this.props.selectFilter(selection)
	}

}

export default connect(null, { selectFilter })(MultiSelect)