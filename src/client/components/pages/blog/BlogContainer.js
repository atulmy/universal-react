// Imports
import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';

// App Imports
import { actionBlogFetch } from '../../../actions/blog'
import Loading from '../../common/Loading'
import Blog from './Blog'

class BlogContainer extends Component {

    static fetchData({ store, params }) {
        return store.dispatch(actionBlogFetch({ id: params.id }))
    }

    componentDidMount() {
        this.props.actionBlogFetch({id: this.props.match.params.id})
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Blog</title>
                </Helmet>

                { this.props.blog.loading ? <Loading /> : <Blog blog={ this.props.blog.details } /> }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        blog: state.blog
    }
}

export default connect(mapStateToProps, { actionBlogFetch })(BlogContainer)