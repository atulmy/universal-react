// Imports
import { combineReducers } from 'redux'

// App Imports
import { blogs, blog } from './blogs'

const appReducer = combineReducers({
    blogs,
    blog,
})

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer