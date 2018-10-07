import React, {Component} from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid className="container-back">
                  <Row className="show-grid">
                    <Col xs={12}>
                        <h1 className="resume-header">Education</h1>
                        <hr className="resume-row" />
                        <div>
                            <Education 
                                startYear={2002}
                                endYear={2006}
                                schoolName="My University"
                                schoolDescription= "Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                It has roots in a piece of classical Latin literature from 45 BC, making it over
                                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College"
                            />
                            <Education 
                                startYear={2007}
                                endYear={2009}
                                schoolName="My Second University"
                                schoolDescription= "Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                It has roots in a piece of classical Latin literature from 45 BC, making it over
                                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College"
                            />
                        </div>
                        
                        <div>
                            <h1 className="resume-header">Experience</h1>
                            <hr className="resume-row" />
                            <Experience 
                                startYear={2009}
                                endYear={2012}
                                jobName="First Job"
                                jobDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                It has roots in a piece of classical Latin literature from 45 BC, making it over
                                2000 years old. Richard McClintock, a Latin professor at Ham"
                            />
                            <Experience 
                                startYear={2012}
                                endYear={2016}
                                jobName="Second Job"
                                jobDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                It has roots in a piece of classical Latin literature from 45 BC, making it over
                                2000 years old. Richard McClintock, a Latin professor at Ham"
                            />
                        </div>
                        <div>
                           <h1 className="resume-header">Skills</h1>
                           <hr className="resume-row" />
                            <div md={12} className="skill-window">
                                <Skills 
                                    skill="Javascript"
                                    progress={100}
                                    className="skill-bar"
                                />
                                <Skills 
                                    skill="HTML/CSS"
                                    progress={80}
                                    className="skill-bar"
                                />
                                <Skills 
                                    skill="NodeJS"
                                    progress={50}
                                    className="skill-bar"
                                />
                                <Skills 
                                    skill="React"
                                    progress={25}
                                    className="skill-bar"
                                />
                            </div>
                        </div>
                    </Col>
                  </Row>
                </Grid>
            </div>
        )
    }
}

export default Resume;