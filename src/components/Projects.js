import React from "react";
import { Card, Button } from 'react-bootstrap';
import '../styles/Projects.css';
import projectsData from "./ProjectsPages/projects.json";

 function Projects() {

     return (
        <div className="container text-center projects-container">
            <div className="row justify-content-start">
                {projectsData.map((project) => (
                    <div key={project.id} className="col-md-4 mb-3">
                        <Card className="project-card d-inline-block br-3 p-3 m-2 border border-2 shadow-lg h-100">
                            <Card.Img
                                variant="top"
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.text}</Card.Text>
                                <Button variant="primary" href={project.link} target="_blank">
                                    Go to Project
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
 }

 export default Projects;