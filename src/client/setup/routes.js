// Imports
import React from 'react'

// App Imports
import Home from '../components/home/Home'
import About from '../components/home/About'
import BlogsContainer from '../components/blog/BlogsContainer'
import BlogContainer from '../components/blog/BlogContainer'
import BlogAdd from '../components/blog/BlogAdd'

// Routes
const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/blogs',
    component: BlogsContainer
  },
  {
    path: '/blog/:id',
    component: BlogContainer
  },
  {
    path: '/blog-add',
    component: BlogAdd
  }
]

export default routes