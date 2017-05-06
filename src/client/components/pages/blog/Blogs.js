import React from 'react'
import { Link } from 'react-router-dom'

function Blogs(props) {
    console.log(props)

    const emptyMessage = (
        <p>No blogs to show.</p>
    );

    const blogList = (
        props.blogs.map((blog) => (
            <li key={ blog.id }>
                <Link to={ `/blog/${ blog.id }` }>{ blog.title }</Link>
            </li>
        ))
    )

    return (
        <ul>
            { props.blogs && props.blogs.length === 0 ? emptyMessage : blogList }
        </ul>
    )
}

export default Blogs