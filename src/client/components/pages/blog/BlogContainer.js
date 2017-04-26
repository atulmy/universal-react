import React, { Component } from 'react'
import { Helmet } from "react-helmet";

import Blog from './Blog'

class BlogContainer extends Component {
    constructor() {
        super();

        this.state = {
            blog: {}
        }
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <Helmet>
                    <title>Blog</title>
                </Helmet>

                <Blog blog={ this.state.blog } />
            </div>
        )
    }
}

export default BlogContainer