import React, {Component} from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
    render() {
        return(
            <div className="landing-div">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                         src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
                         alt="avatar"
                         className="avatar-img"
                        />
                        
                        <div className="banner-text">
                            <h1 style={{marginBottom: "7px"}}>Liam Webb</h1>
                            <h2 style={{marginTop: "7px", color:"white"}}>Full Stack Web Developer</h2>
                            
                            <hr />
                            
                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
                            
                            <div className="social-links">
                                
                                {/*Github*/}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                
                                {/*Freecodecamp*/}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>
                                
                                {/*Youtube*/}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;