import React, {Component} from "react";
import { Panel, Col } from 'react-bootstrap'; 

class ProjectCard extends Component {
    
    render() {
        const image=this.props.image;
        const stack=this.props.stack;
        const name=this.props.name;
        return(
            <Col xs={12} sm={6} md={4}>
                        <div>
                          <Panel>
                            <Panel.Heading>
                              <Panel.Title componentClass="h3" className="panel-head" style={{background: `url(${image})`}}>
                                    <div className="stack">{stack}</div>
                               </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                {name}
                            </Panel.Body>
                          </Panel>
                        </div>
                    </Col>
        )
    }
}

export default ProjectCard;