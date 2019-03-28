export const LOAD_PROJECTS = 'LOAD_PROJECTS'

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
