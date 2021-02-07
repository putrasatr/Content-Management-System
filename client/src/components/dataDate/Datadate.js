import React, { Component } from 'react';
import Navbar from '../Navbar';
import DatadateForm from '../../containers/dataDate/DatadateForm';
import DatadateSearch from '../../containers/dataDate/DatadateSearch';
import DatadateList from '../../containers/dataDate/DatadateList';
import { connect } from 'react-redux';
import { loadDatadate } from '../../actions/dataDates';
import './Datadate.css'

class Datadate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchLetter: '',
            searchFrequency: ''
        }
    }

    componentDidMount() {
        this.props.loadDatadate();
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

    render() {
        let dataFiltered = this.props.data;
        if (this.state.searchLetter && this.state.searchFrequency) {
            dataFiltered = this.props.data.filter(item =>
                item.letter.toLowerCase() === this.state.searchLetter.toLowerCase() && Number(item.frequency) === Number(this.state.searchFrequency)
            )
        } else if (this.state.searchLetter) {
            dataFiltered = this.props.data.filter(item =>
                item.letter.toLowerCase() === (this.state.searchLetter.toLowerCase())
            )
        } else if (this.state.searchFrequency) {
            dataFiltered = this.props.data.filter(item =>
                item.frequency === this.state.searchFrequency
            )
        }
        console.log("after filter", dataFiltered)
        return (
            <div>
                <Navbar />
                <div className="container my-md-4">
                    <DatadateForm />
                    <h3 className="mt-4">Search</h3>
                    <hr />
                    <DatadateSearch
                        onSearchLetter={this.onSearchLetter}
                        onSearchFrequency={this.onSearchFrequency}
                        searchLetter={this.state.searchLetter}
                        searchFrequency={this.state.searchFrequency}
                    />
                    <DatadateList
                        data={[...dataFiltered]}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    data: state.dataDates
})

const mapDispatchToProps = (dispatch) => ({
    loadDatadate: () => dispatch(loadDatadate())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Datadate)