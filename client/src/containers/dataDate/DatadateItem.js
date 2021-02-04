import React, { Component } from 'react';
import { updateDatadate, deleteDatadate, resendDatadate } from '../../actions/dataDates';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

class DatadateItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            letter: this.props.letter || '',
            frequency: this.props.frequency || '',
            isEdit: false,
        }
        this.editBtnClicked = this.editBtnClicked.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleResend = this.handleResend.bind(this)
    }

    editBtnClicked() {
        this.setState({
            isEdit: true
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

    handleUpdate() {
        this.props.updateDatadate(this.props.id, this.state.letter, this.state.frequency)
        this.setState({
            isEdit: false
        })
    }

    handleResend() {
        this.props.resendDatadate(this.props.id, this.state.letter, this.state.frequency)
    }

    handleDelete() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You're data can't restore again!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I\'m sure!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.deleteDatadate(this.props.id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }

    render() {
        if (this.state.isEdit) {
            return (
                <tr>
                    <th scope="row">{this.props.no}</th>
                    <td>
                        <input type="date" value={this.state.letter} onChange={this.handleInputChange} name="letter" className="form-control" />
                    </td>
                    <td>
                        <input type="text" value={this.state.frequency} onChange={this.handleInputChange} name="frequency" className="form-control" />
                    </td>

                    <td>
                        <button onClick={this.handleUpdate} className={"btn btn-success mr-2 "}><i className="fa fa-save"></i> save</button>
                    </td>
                </tr>
            )
        } else {
            return (
                <tr className={this.props.sent ? "" : "bg-danger text-white"}>
                    <th scope="row">{this.props.no}</th>
                    <td>{this.state.letter}</td>
                    <td>{this.state.frequency}</td>

                    <td>
                        <button onClick={this.editBtnClicked} className={this.props.sent ? "btn btn-success mr-2" : "d-none"}><i className="fa fa-edit"></i> update </button>
                        <button onClick={this.props.sent ? this.handleDelete : this.handleResend} className={this.props.sent ? 'btn btn-danger' : 'btn btn-warning'}><i className={this.props.sent ? "fa fa-trash" : "fa fa-refresh"}></i> {this.props.sent ? 'delete' : 'Resend'}</button>
                    </td>
                </tr>
            )
        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateDatadate: (id, letter, frequency) => dispatch(updateDatadate(id, letter, frequency)),
    deleteDatadate: () => dispatch(deleteDatadate(ownProps.id)),
    resendDatadate: (id, letter, frequency) => dispatch(resendDatadate(id, letter, frequency)),
})

export default connect(
    null,
    mapDispatchToProps
)(DatadateItem)