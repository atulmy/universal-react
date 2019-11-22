// Imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

// App Imports
import { actionBlogsFetch, actionBlogsFetchIfNeeded } from './api/actions'
import Loading from '../common/Loading'
import Blogs from './Blogs'

// Component
const BlogsContainer = () => {
  // state
  const { loading, list } = useSelector(state => state.blogs)
  const dispatch = useDispatch()

  // on mount/update
  useEffect(() => {
    dispatch(actionBlogsFetchIfNeeded())
  }, [])

  const refresh = () => {
    dispatch(actionBlogsFetch())
  }

  // render
  return (
    <div>
      <Helmet>
        <title>Blogs</title>
      </Helmet>

      <h1>Blogs</h1>

      <p>
        <button onClick={refresh}>Refresh</button>
      </p>

      {
        loading
          ? <Loading/>
          : <Blogs blogs={list}/>}
      }
    </div>
  )
}

// Static method
BlogsContainer.fetchData = ({ store }) => {
  return store.dispatch(actionBlogsFetch())
}

export default BlogsContainer
