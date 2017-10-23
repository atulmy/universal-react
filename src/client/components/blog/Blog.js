// Imports
import React from 'react'
import { Helmet } from 'react-helmet'

const Blog = (props) => {
    return (
        <div>
            <Helmet>
                <title>Blog { props.blog.title }</title>
            </Helmet>

            <h1>{ props.blog.title }</h1>

            <p>{ props.blog.body }</p>
        </div>
    )
}

export default Blog