import React, { Component } from 'react';
import Navbar from '../Navbar';
import MapsForm from '../../containers/maps/MapsForm';
import MapsSearch from '../../containers/maps/MapsSearch';
import MapsList from '../../containers/maps/MapsList';
import './Map.css'
import { connect } from 'react-redux';
import { loadMaps } from '../../actions/maps';

class Maps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTitle: ''
        }
    }

    componentDidMount() {
        this.props.loadMaps();
    }
    onSearchTitle = (event) => {
        this.setState({
            searchTitle: event.target.value
        })
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        let dataFiltered = this.props.data;
        console.log("sebelum filter", dataFiltered)
        if (this.state.searchTitle) {
            dataFiltered = this.props.data.filter(item =>
                item.title[0].toLowerCase() === this.state.searchTitle[0].toLowerCase() &&
                item.title.toLowerCase().includes(this.state.searchTitle.toLowerCase())
            )
        }
        console.log("sesudah filter", dataFiltered)

        return (
            <div>
                <Navbar />
                <div className="container my-md-4">
                    <MapsForm />
                    <h3 className="mt-4">Search</h3>
                    <hr />
                    <MapsSearch
                        onSearchTitle={this.onSearchTitle}
                        searchTitle={this.state.searchTitle}
                    />
                    <MapsList
                        data={[...dataFiltered]}

                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.maps
})

const mapDispatchToProps = (dispatch) => ({
    loadMaps: () => dispatch(loadMaps())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Maps)