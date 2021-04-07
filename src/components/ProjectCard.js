import React from "react";
import { changeProject } from "../actions/projectActions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

function ProjectCard({ project }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const dispatch = useDispatch();

  return (
    <div
      ref={ref}
      className="project-card"
      onClick={() => dispatch(changeProject(project))}
    >
      <Div animate={inView}>
        <Link to="/projectinfo">
          <img
            className="preview-pic"
            src={project.preview}
            alt="project-preview"
          />

          <div className="middle">
            <div className="text">{project.project_name}</div>
          </div>
        </Link>
      </Div>
    </div>
  );
}
export default ProjectCard;

const Div = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 2s;
`;
