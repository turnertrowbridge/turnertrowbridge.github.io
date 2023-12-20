import React from "react";
import { Card, Button } from 'react-bootstrap';
import '../styles/Projects.css';

 function Projects() {
     const projectsData = [
         {
             id: 1,
             title: 'Project 1',
             image: 'https://placekitten.com/200/200', // Replace with your image URL
             text: 'Description of Project 1.',
             link: 'https://example.com/project1',
         },
         {
             id: 1,
             title: 'Project 1',
             image: 'https://placekitten.com/200/200', // Replace with your image URL
             text: 'Description of Project 1.',
             link: 'https://example.com/project1',
         },
         {
             id: 1,
             title: 'Project 1',
             image: 'https://placekitten.com/200/200', // Replace with your image URL
             text: 'Description of Project 1.',
             link: 'https://example.com/project1',
         },
         {
             id: 1,
             title: 'Project 1',
             image: 'https://placekitten.com/200/200', // Replace with your image URL
             text: 'Description of Project 1.',
             link: 'https://example.com/project1',
         }
     ]
    return (
        <div className="container text-center projects-container">
            <div className="row gy-3 mt-3">
                {projectsData.map((project) => (
                    <div key={project.id} className="col-sm">
                        <Card className="h-100">
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