// Imports
import React from 'react'
import { Link } from 'react-router-dom'

const Blog = (props) => {
    return (
        <div>
            <h1>{ props.blog.title }</h1>

            <p>{ props.blog.body }</p>

            <p>
                <Link to={ `/blogs` }>Back to all blogs</Link>
            </p>
        </div>
    )
}

export default Blog