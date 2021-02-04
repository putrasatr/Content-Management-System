import React, { Component } from 'react';

export default class MaspSearch extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <form className="row mb-3">
                <div className="col-sm-4 d-flex">
                    <label className="col-form-label mr-2">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="title..."
                        aria-label="Title"
                        name="title"
                        value={this.props.searchTitle}
                        onChange={this.props.onSearchTitle} />
                </div>
            </form>
        )
    }
}