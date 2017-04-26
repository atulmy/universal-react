import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';

import Blogs from './Blogs'
import { actionBlogFetch } from '../../../actions/blog'

class BlogsContainer extends Component {
    static fetchData({ store }) {
        return store.dispatch(actionBlogFetch())
    }

    componentDidMount() {
        this.props.actionBlogFetch()
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Blogs</title>
                </Helmet>

                <h1>Blogs</h1>

                <Blogs blogs={ this.props.blogs } />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        blogs: state.reducerBlog // not sure why receiving `reducerBlog` instead of `blogs` !?
    }
}

export default connect(mapStateToProps, { actionBlogFetch })(BlogsContainer)