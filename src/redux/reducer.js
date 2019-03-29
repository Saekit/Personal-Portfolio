import { LOAD_PROJECTS } from '../actions/projectActions'
import { LOAD_HOBBIES } from '../actions/hobbiesActions'

const initialState = {
  projects: [],
  hobbies: []
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PROJECTS: {
      return {...state, projects: action.payload}
    }
    case LOAD_HOBBIES: {
      return {...state, projects: action.payload}
    }
    default:
      return state
  }
}
export default reducer
