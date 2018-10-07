import React, {Component} from "react";
import { Grid, Row } from 'react-bootstrap'; 
import ProjectCard from "./projectcard";
class Projects extends Component {
    render() {
        return(
           <Grid>
                <Row className='show-grid'>
                    <ProjectCard 
                        image="https://laracasts.com/images/series/circles/do-you-react.png"
                        stack=" Ipsum is that it has a more-or-less normal distribution of letters, 
                        as opposed to."
                        name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <ProjectCard 
                        image="https://www.seeklogo.net/wp-content/uploads/2016/06/bootstrap-logo-vector-download.jpg"
                        stack="using 'Content here, content here', making it look like readable Engl."
                        name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                </Row>
            </Grid>
        )
    }
}

export default Projects;