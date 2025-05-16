import React from "react";

export default class SearchForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    onChange = e => {
        this.setState({ inputValue: e.target.value })
    }
    render() {
        const { searchDogs } = this.props
        return (
            <div>
                <input
                    type="text"
                    name="dog search"
                    onChange={this.onChange}
                    value={this.inputValue}
                    placeholder="Search for dogs breed"
                />
                <button onClick={() => searchDogs(this.state.inputValue)} >Search</button>
            </div>
        )
    }
}