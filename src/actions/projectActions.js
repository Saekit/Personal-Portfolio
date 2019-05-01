export const LOAD_PROJECTS = "LOAD_PROJECTS";
export const CHANGE_PROJECT = "CHANGE_PROJECT";

export const changeProject = project => {
  return {
    type: CHANGE_PROJECT,
    payload: project
  };
};
