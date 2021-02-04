import React, { Component } from 'react';
import Navbar from '../Navbar';
import DatadateForm from '../../containers/dataDate/DatadateForm';
import DatadateSearch from '../../containers/dataDate/DatadateSearch';
import DatadateList from '../../containers/dataDate/DatadateList';
import './Datadate.css'

export default class Datadate extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchLetter: '',
            searchFrequency: ''
        }
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
                        searchLetter = {this.state.searchLetter}
                        searchFrequency = {this.state.searchFrequency}
                    />
                    <DatadateList 
                        searchLetter = {this.state.searchLetter}
                        searchFrequency = {this.state.searchFrequency}
                    />
                </div>
            </div>
        )
    }
}