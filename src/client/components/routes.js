import React from 'react'

import Home from './pages/Home'
import About from './pages/About'
import BlogsContainer from './pages/blog/BlogsContainer'
import BlogContainer from './pages/blog/BlogContainer'
import BlogAdd from './pages/blog/BlogAdd'

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