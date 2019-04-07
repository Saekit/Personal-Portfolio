export const LOAD_PROJECTS = 'LOAD_PROJECTS'
export const CHANGE_PROJECT = 'CHANGE_PROJECT'

export const getProjects = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/projects')
    .then(res => res.json())
    .then(projects => {
      dispatch({
        type: LOAD_PROJECTS,
        payload: projects
      })
    }).catch(console.error)
  }
}

export const changeProject = (project) => {
  return {
    type: CHANGE_PROJECT,
    payload: project
  }
}
