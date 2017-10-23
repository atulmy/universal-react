// Imports
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

// App Imports
import { actionBlogsFetch, actionBlogsFetchIfNeeded } from './api/actions'
import Loading from '../common/Loading'
import Blogs from './Blogs'

class BlogsContainer extends Component {

    static fetchData({ store }) {
        return store.dispatch(actionBlogsFetch())
    }

    componentDidMount() {
        this.props.dispatch(actionBlogsFetchIfNeeded())
    }

    refresh() {
        this.props.dispatch(actionBlogsFetch())
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Blogs</title>
                </Helmet>

                <h1>Blogs</h1>

                <p><button onClick={ this.refresh.bind(this) }>Refresh</button></p>

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

export default connect(blogsState)(BlogsContainer)