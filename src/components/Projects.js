import projects from "../projects.json"
import {Card, Button} from 'react-bootstrap';


const Projects = () => {
    return (
        <div class="jumbotron" style={{ paddingLeft: "20px" }}>
            {projects.map(project => {
                return (
                    <Card>
                        <Card.Header as="h5">{project.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <Button href={project.live_url} variant="primary">Live</Button>
                            <Button href={project.git_url} variant="primary">GitHub</Button>
                        </Card.Body>
                    </Card>)
            })}
        </div>

    )
}

export default Projects