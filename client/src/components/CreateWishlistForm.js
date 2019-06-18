import React, {Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class CreateWishlistForm extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            userEmail: "",
            wishlistTitle: ""
        }
        this.handleSumbitForm = this.handleSumbitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    async handleSumbitForm(e) {
        e.preventDefault()

    }

    handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        })
    }

    render() {
        return(
            <div>
                <form onChange={this.handleInputChange} onSubmit={this.handleSumbitForm}>
                   <input
                    type='text'
                    name='userName' 
                    placeholder= 'Your Name'
                    value={this.state.userName}                 
                   />
                   <input
                    type='text'
                    name='userEmail' 
                    placeholder = 'Your Email'
                    value={this.state.userEmail}                 
                   />
                   <input
                    type='text'
                    name='wishlistTitle' 
                    placeholder= 'Wishlist Title'
                    value={this.state.wishlistTitle}                 
                   />
                </form>

            </div>
        )
    }
}

export default CreateWishlistForm