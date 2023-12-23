import React, {useState, useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import '../styles/Projects.css';
import repoInfo from './ProjectsPages/repo_info.json';
import favRepos from './ProjectsPages/fav_repos.json';
import combRepos from './ProjectsPages/comb_repos.json';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        document.title = "Projects - Turner's Website";

        const fetchData = async () => {
            try {
                const username = repoInfo[0].username;
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
                if (response.ok) {
                    const data = await response.json();

                    const favRepoNames = favRepos.map(repo => repo.name);

                    combRepos.forEach(cbRepo => {
                        cbRepo.repos.forEach(repoName => {
                            let foundIndex = data.findIndex(repo => repo.name === repoName);

                            if (foundIndex !== -1) {
                                let foundRepo = data[foundIndex];

                                cbRepo.repo_objects.push(foundRepo);

                                // Check for the latest date
                                if (!cbRepo.updated_at || foundRepo.updated_at > cbRepo.updated_at) {
                                    cbRepo.updated_at = foundRepo.updated_at;
                                }

                                // Remove foundRepo from data array
                                data.splice(foundIndex, 1);
                            }
                        })
                    });

                    const favoriteRepos = data.filter(repo => favRepoNames.includes(repo.name));
                    const remainingRepos = data.filter(repo => !favRepoNames.includes(repo.name));

                    favoriteRepos.forEach(project => {
                        project.favorite = true;
                    });

                    remainingRepos.forEach(project => {
                        project.favorite = false;
                    });

                    const mergedRepos = [...combRepos, ...favoriteRepos, ...remainingRepos];
                    setProjects(mergedRepos);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month (0-11) => (01-12)
        const day = String(date.getDate()).padStart(2, '0'); // Day of the month (1-31)
        const year = date.getFullYear(); // Year
        return `${month}/${day}/${year}`;
    }

    return (
        <div className="container text-center projects-container">
            <div className="row justify-content-start">
                {projects.map((project) => (
                    <div key={project.id} className={`col-md-4 mb-3`}>
                        <Card
                            className={`project-card d-inline-block br-3 p-3 m-2 border border-2 shadow-lg h-100 ${project.favorite ? 'fav_repos' : ''}`}>
                            <Card.Body>
                                <Card.Title>{project.favorite ? "★" : ""}{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <p>{formatDate(project.updated_at)}</p>
                                <Button variant="primary"
                                        href={project.pageLink ? project.pageLink : project.html_url}
                                        target={project.pageLink ? null : "_blank"}
                                        rel="noopener noreferrer">
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
