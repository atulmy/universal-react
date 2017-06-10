// Imports
import React from 'react'

const Blog = (props) => {
    return (
        <div>
            <h1>{ props.blog.title }</h1>

            <p>{ props.blog.body }</p>
        </div>
    )
}

export default Blog