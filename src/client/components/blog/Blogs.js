// Imports
import React from 'react'
import { Link } from 'react-router-dom'

// Component
const Blogs = ({ blogs }) => {
  // render
  return (
    <ul>
      {
        blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Blogs
