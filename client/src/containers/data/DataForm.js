import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addData } from '../../actions/datas'

class DataForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisibleAdd: 'card d-none',
            letter: '',
            frequency: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.handleClickSave = this.handleClickSave.bind(this)
    }

    handleClickAdd() {
        this.setState({
            isVisibleAdd: 'card'
        })
    }
    handleClickAddClose() {
        this.setState({
            isVisibleAdd: 'card d-none'
        })
    }
    handleInputChange(event) {
        const target = event.target;
        console.log(target)
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    }

    handleClickSave(event) {
        if (this.state.letter && this.state.frequency) {
            this.props.addData(this.state.letter, this.state.frequency)
            this.setState({ letter: '', frequency: '' })
        }
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <button onClick={this.state.isVisibleAdd === 'card d-none' ? () => this.handleClickAdd() : () => this.handleClickAddClose()} className="btn btn-primary mb-3 mt-5"><i className={this.state.isVisibleAdd === 'card d-none' ? 'fa fa-plus' : 'fa fa-minus'}></i> add</button>
                <div className={this.state.isVisibleAdd}>
                    <div className="card-body bg-light">
                        <form onSubmit={this.handleClickSave} className="row mb-3">
                            <div className="col-sm-4 d-flex">
                                <label className="col-form-label mr-2">Letter</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="A"
                                    aria-label="Letter"
                                    name="letter"
                                    value={this.state.letter}
                                    onChange={this.handleInputChange} 
                                    required />
                            </div>
                            <div className="col-sm-4 d-flex">
                                <label className="col-form-label md-4 mr-2">Frequency</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="0.0000"
                                    aria-label="Frequency"
                                    name="frequency"
                                    value={this.state.frequency}
                                    onChange={this.handleInputChange} 
                                    required />
                            </div>
                            <button type="submit" className="btn btn-outline-light">save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addData: (letter, frequency) => dispatch(addData(letter, frequency)),
})

export default connect(
    null,
    mapDispatchToProps
)(DataForm)