
import React, { Component } from 'react';
import Navbar from '../Navbar';
import MapsForm from '../../containers/maps/MapsForm';
import MapsSearch from '../../containers/maps/MapsSearch';
import MapsList from '../../containers/maps/MapsList';
import './Map.css'

export default class Maps extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchTitle: ''
        }
    }

    onSearchTitle = (event) => {
        this.setState({
            searchTitle: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container my-md-4">
                    <MapsForm />
                    <h3 className="mt-4">Search</h3>
                    <hr />
                    <MapsSearch 
                        onSearchTitle={this.onSearchTitle} 
                        searchTitle = {this.state.searchTitle}
                    />
                    <MapsList 
                        searchTitle = {this.state.searchTitle}
                        searchLat = {this.state.searchLat}
                        searchLang = {this.state.searchLang}

                    />
                </div>
            </div>
        )
    }
}