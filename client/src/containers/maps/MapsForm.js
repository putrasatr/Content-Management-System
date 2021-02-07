import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMaps } from '../../actions/maps'

class MapsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisibleAdd: 'card d-none',
            title: '',
            lat: '',
            lang: ''
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
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    handleClickSave(event) {
        if (this.state.title && this.state.lat && this.state.lang) {
            this.props.addMaps(this.state.title, this.state.lat, this.state.lang)
            this.setState({ title: '', lat: '', lang: '' })
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
                            <div className="col-sm-3.5 d-flex">
                                <label className="col-form-label mr-2"><strong>Title</strong></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title of map"
                                    aria-label="Title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="col-sm-3.2 d-flex">
                                <label className="col-form-label mr-2"><strong>Latitude</strong></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="0.0000"
                                    aria-label="Lat"
                                    name="lat"
                                    value={this.state.lat}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="col-sm-3.4 d-flex">
                                <label className="col-form-label mr-2"><strong>Longitude</strong></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="0.0000"
                                    aria-label="Lang"
                                    name="lang"
                                    value={this.state.lang}
                                    onChange={this.handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-secondary">save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addMaps: (title, lat, lang) => dispatch(addMaps(title, lat, lang)),
})

export default connect(
    null,
    mapDispatchToProps
)(MapsForm)