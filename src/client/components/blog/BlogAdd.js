// Imports
import React, { useState } from 'react'
import { Helmet } from "react-helmet"

// App Imports
import { actionBlogAdd } from './api/actions'

// Component
const BlogAdd = () => {
  // state
  const [isSubmitting, isSubmittingToggle] = useState(false)
  const [message, setMessage] = useState(false)
  const [blog, setBlog] = useState({
    userId: 1, // Example
    title: '',
    body: ''
  })

  // on submit
  const onSubmit = async event => {
    event.preventDefault()

    isSubmittingToggle(true)

    try {
      const { data } = await actionBlogAdd(blog)

      if(data) {
        setMessage(`Blog added successfully with id ${ data.id }`)
      }
    } catch (error) {
      setMessage(`Error ${ error.message }. Please try again.`)
    } finally {
      isSubmittingToggle(false)
    }
  }

  // on change
  const onChange = event => {
    setBlog({ ...blog, [event.target.name]: event.target.value})
  }

  // render
  return (
    <div>
      <Helmet>
        <title>Blog Add</title>
      </Helmet>

      <h1>Blog Add</h1>

      <form onSubmit={onSubmit}>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title"
            required="required"
            autoComplete="off"
            value={blog.title}
            onChange={onChange}
          />
        </p>

        <p>
          <textarea
            name="body"
            placeholder="Body"
            required="required"
            value={blog.body}
            onChange={onChange}
          />
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>

        { message && <p>{message}</p> }
      </form>
    </div>
  )
}

export default BlogAdd