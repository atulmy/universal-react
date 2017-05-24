// Imports
import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

// App Imports
import { actionBlogsFetch } from '../../../actions/blog'
import Loading from '../../common/Loading'
import Blogs from './Blogs'

class BlogsContainer extends Component {

    static fetchData({ store }) {
        return store.dispatch(actionBlogsFetch())
    }

    componentDidMount() {
        this.props.actionBlogsFetch()
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Blogs</title>
                </Helmet>

                <h1>Blogs</h1>

                { this.props.blogs.loading ? <Loading /> : <Blogs blogs={ this.props.blogs.list } /> }
            </div>
        )
    }
}

function blogsState(state) {
    return {
        blogs: state.blogs
    }
}

export default connect(blogsState, { actionBlogsFetch })(BlogsContainer)