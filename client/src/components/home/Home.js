import React, { Component } from 'react';
import Navbar from '../Navbar'
import './Home.css'

export default class Card extends Component {
    render() {
        const email = localStorage.getItem("email")
        console.log(email)
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="mt-5">
                        <div className="alert alert-secondary mt-5" role="alert">
                            <h1 className="display-4">Welcome, <b>{email ? email : ''}</b></h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}