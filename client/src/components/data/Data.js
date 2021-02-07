import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/datas'
import Navbar from '../Navbar';
import DataForm from '../../containers/data/DataForm';
import DataSearch from '../../containers/data/DataSearch';
import DataList from '../../containers/data/DataList';
import './Data.css'

class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchLetter: '',
            searchFrequency: '',
        }
    }
    componentDidMount() {
        this.props.loadData();
    }
    onSearchLetter = (event) => {
        this.setState({
            searchLetter: event.target.value
        })
    }

    onSearchFrequency = (event) => {
        this.setState({
            searchFrequency: event.target.value
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

    render() {
        let dataFiltered = this.props.data;
        if (this.state.searchLetter && this.state.searchFrequency) {
            dataFiltered = this.props.data.filter(item =>
                item.letter.toLowerCase().includes(this.state.searchLetter.toLowerCase()) && item.frequency === Number(this.state.searchFrequency)
            )
        } else if (this.state.searchLetter) {
            dataFiltered = this.props.data.filter(item =>
                item.letter.toLowerCase().includes(this.state.searchLetter.toLowerCase())
            )
        } else if (this.state.searchFrequency) {
            dataFiltered = this.props.data.filter(item =>
                item.frequency === Number(this.state.searchFrequency)
            )
        }
        return (
            <div>
                <Navbar />
                <div className="container my-md-4">
                    <DataForm />
                    <h3 className="mt-4">Search</h3>
                    <hr />
                    <DataSearch
                        onSearchLetter={this.onSearchLetter}
                        onSearchFrequency={this.onSearchFrequency}
                        searchLetter={this.state.searchLetter}
                        searchFrequency={this.state.searchFrequency}
                    />
                    <DataList
                        searchLetter={this.state.searchLetter}
                        searchFrequency={this.state.searchFrequency}
                        data={[...dataFiltered]}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.datas
})

const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(loadData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Data)