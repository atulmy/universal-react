import { ACTION_TYPE_BLOG_FETCH } from '../actions/blog'

export default function reducerBlog(state = [], action = {}) {
    switch (action.type) {
        case ACTION_TYPE_BLOG_FETCH:
            return action.blogs

        default:
            return state
    }
}