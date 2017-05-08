import { ACTION_TYPE_BLOGS_FETCH, ACTION_TYPE_BLOG_FETCH } from '../actions/blog'

export default function reducerBlogs(state = [], action = {}) {
    console.log(action.type)

    switch (action.type) {
        case ACTION_TYPE_BLOGS_FETCH:
            return action.blogs

        case ACTION_TYPE_BLOG_FETCH:
            return [action.blog]

        default:
            return state
    }
}