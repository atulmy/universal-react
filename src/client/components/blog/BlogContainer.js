// Imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import { actionBlogFetch, actionBlogFetchIfNeeded } from './api/actions'
import Loading from '../common/Loading'
import Blog from './Blog'

// Component
const BlogContainer = ({ match: { params: { id } } }) => {
  // state
  const { loading, details } = useSelector(state => state.blog)
  const dispatch = useDispatch()

  // on mount/update
  useEffect(() => {
    refresh()
  }, [])

  const refresh = () => {
    dispatch(actionBlogFetchIfNeeded({ id: parseInt(id) }))
  }

  // render
  return (
    <div>
      {
        loading
          ? <Loading/>
          : details && details[id] && <Blog blog={details[id]} />
      }

      <p>
        <button onClick={refresh}>Refresh</button>
      </p>

      <p><Link to={`/blogs`}>Back to all blogs</Link></p>
    </div>
  )
}

// Static method
BlogContainer.fetchData = ({ store, params: { id } }) => {
  return store.dispatch(actionBlogFetch({ id: parseInt(id) }))
}

export default BlogContainer
