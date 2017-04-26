import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = (props) => (
    <div>
        <ul>
            {
                props.blogs.map((blog) => (
                    <li key={ blog.id }>
                        <Link to={ `/blog/${ blog.id }` }>{ blog.title }</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default Blogs