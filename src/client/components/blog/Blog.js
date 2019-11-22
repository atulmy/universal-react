// Imports
import React from 'react'
import { Helmet } from 'react-helmet'

const Blog = ({ blog: { title, body } }) => {
  return (
    <div>
      <Helmet>
        <title>Blog { title }</title>
      </Helmet>

      <h1>{ title }</h1>

      <p>{ body }</p>
    </div>
  )
}

export default Blog
