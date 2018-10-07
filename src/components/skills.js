import React, { Component } from "react";
import { ProgressBar, Row, Col } from "react-bootstrap";


class Skills extends Component {
    render() {
        const progress=this.props.progress;
        const skill=this.props.skill;
        return(
                <Row>
                    <Col md={12}>
                        <div>
                            {skill} <ProgressBar bsStyle="danger" now={progress} />
                        </div>
                    </Col>
                </Row>
        )
    }
}

export default Skills