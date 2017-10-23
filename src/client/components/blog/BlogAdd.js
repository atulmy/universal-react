// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet"

// App Imports
import { actionBlogAdd } from './api/actions'

class BlogAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blog: {
                userId: 1, // Example
                title: '',
                body: ''
            },
            isLoading: false,
            success: false,
            error: false,
            message: ''
        }
    }

    onSubmit(event) {
        event.preventDefault()

        this.setState({ isLoading: true })

        this.props.dispatch(actionBlogAdd(this.state.blog))
            .then((response) => {
                console.log(response)

                this.setState({ isLoading: false })

                if(typeof response.data.id !== 'undefined' && response.data.id > 0) {
                    this.setState({ success: true })
                    this.setState({ message: `Blog added successfully with id ${ response.data.id }` })

                    // Reset blog state
                    let blog = { title: '', body: '' }
                    this.setState({
                        blog
                    });
                } else {
                    this.setState({ error: true })
                    this.setState({ message: `There was an error. Please try again` })
                }
            })
            .catch(function (error) {
                this.setState({ isLoading: false })

                this.setState({ error: true })
                this.setState({ message: `There was an error. Please try again` })
            })
    }

    setBlogTitle(event) {
        let blog = this.state.blog
        blog.title = event.target.value

        this.setState({
            blog
        })
    }

    setBlogBody(event) {
        let blog = this.state.blog
        blog.body = event.target.value

        this.setState({
            blog
        })
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Blog Add</title>
                </Helmet>

                <h1>Blog Add</h1>

                <form onSubmit={ this.onSubmit.bind(this) }>
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            required="required"
                            autoComplete="off"
                            value={ this.state.blog.title }
                            onChange={ this.setBlogTitle.bind(this) }
                        />
                    </p>

                    <p>
                        <textarea
                            name="body"
                            placeholder="Body"
                            required="required"
                            value={ this.state.blog.body }
                            onChange={ this.setBlogBody.bind(this) }
                        ></textarea>
                    </p>

                    <p>
                        <button type="submit" disabled={ this.state.isLoading }>Submit</button>
                    </p>

                    { this.state.message !== '' ? <p>{ this.state.message }</p> : '' }
                </form>
            </div>
        )
    }
}

function blogsState(state) {
    return {
        blogs: state.blogs
    }
}

export default connect(blogsState)(BlogAdd)