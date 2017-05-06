import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';

import Blogs from './Blogs'
import { actionBlogsFetch } from '../../../actions/blog'

class BlogsContainer extends Component {

    static fetchData({ store }) {
        return store.dispatch(actionBlogsFetch())
    }

    componentDidMount() {
        console.log('BlogsContainer componentDidMount')

        this.props.actionBlogsFetch()
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
        blogs: state.reducerBlogs // not sure why receiving `reducerBlogs` instead of `blogs` !?
    }
}

export default connect(mapStateToProps, { actionBlogsFetch })(BlogsContainer)