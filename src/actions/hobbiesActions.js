export const  LOAD_HOBBIES = 'LOAD_HOBBIES'

export const getHobbies = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/hobbies')
    .then(res => res.json())
    .then(hobbies => {
      dispatch({
        type: LOAD_HOBBIES,
        payload: hobbies
      })
    }).catch(console.error)
  }
}
