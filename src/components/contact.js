import React, {Component} from "react";
import { Grid, ListGroup, ListGroupItem } from "react-bootstrap";


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid container-back">
                <h2>Contact Me</h2>
                <hr className="about-row" />
                <div className="contact-list">
                    <ListGroup>
                        <ListGroupItem className="contact-item">
                            <i className="fa fa-phone-square" aria-hidden="true" />
                            07936685086
                        </ListGroupItem>
                      <ListGroupItem className="contact-item">
                            <i className="fa fa-facebook-square" aria-hidden="true" />
                            <a href="https://www.facebook.com/liam.webb.12" target="_blank" rel="noopener noreferrer">Facebook profile</a>
                      </ListGroupItem>
                      <ListGroupItem className="contact-item">
                            <i className="fa fa-envelope" aria-hidden="true" style={{paddingRight: "63px"}} />
                            liamwebb11@hotmail.com
                      </ListGroupItem>
                    </ListGroup>
                </div>
                </Grid>
            </div>
        )
    }
}

export default Contact;