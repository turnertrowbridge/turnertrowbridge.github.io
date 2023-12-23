import React, {useState, useEffect} from 'react';
import {ListGroup} from 'react-bootstrap';
import repoInfo from './repo_info.json';

const Scoreboard = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedRepos = await Promise.all(
                    repoInfo.map(async ({username, repo}) => {
                        const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
                        if (response.ok) {
                            const data = await response.json();
                            return {
                                id: data.id,
                                title: data.name,
                                languages: data.language,
                                description: data.description,
                                url: data.html_url,
                                lastUpdated: data.updated_at,
                            };
                        } else {
                            throw new Error('Failed to fetch data');
                        }
                    })
                );
                setRepos(fetchedRepos);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ListGroup>
            {repos.map((repo) => (
                <ListGroup.Item key={repo.id}>
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        <h2>{repo.title}</h2>
                    </a>
                    <p>Language: {repo.languages}</p>
                    {repo.description && <p>Description: {repo.description}</p>}
                    <p>Last Updated: {new Date(repo.lastUpdated).toLocaleString()}</p>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Scoreboard;
