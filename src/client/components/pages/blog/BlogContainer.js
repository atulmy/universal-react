import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';

import Blog from './Blog'
import { actionBlogFetch } from '../../../actions/blog'

class BlogContainer extends Component {

    static fetchData({ store, params }) {
        return store.dispatch(actionBlogFetch({ id: params.id }))
    }

    componentDidMount() {
        this.props.actionBlogFetch({ id: this.props.match.params.id })
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Blog</title>
                </Helmet>

                <Blog blog={ this.props.blog[0] } />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        blog: state.reducerBlogs // not sure why receiving `reducerBlogs` instead of `blog` !?
    }
}

export default connect(mapStateToProps, { actionBlogFetch })(BlogContainer)