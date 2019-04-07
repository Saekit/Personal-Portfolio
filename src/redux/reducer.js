import { LOAD_PROJECTS, CHANGE_PROJECT } from '../actions/projectActions'

const initialState = {
  projects: [],
  chosenProject: {}
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PROJECTS: {
      return {...state, projects: action.payload}
    }
    case CHANGE_PROJECT : {
      return {...state, chosenProject: action.payload}
    }
    default:
      return state
  }
}
export default reducer
