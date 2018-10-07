import React, {Component} from "react";

class About extends Component {
    render() {
        return(
            <div className="container container-back" >
                <div style={{textAlign: "center"}}>
                    <img 
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt="avatar"
                        style ={{height: "200px", paddingTop:"20px"}}
                        />
                </div>
                    <h2 style={{textAlign: "center"}}>
                        Liam Webb
                    </h2>
                    <hr className="about-row" />
                        <p>
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there 
                            isn't anything embarrassing hidden in the middle of text. 
                            All the Lorem Ipsum generators on the Internet tend to repeat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. 
                            Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Dui nunc mattis enim ut tellus elementum sagittis vitae et. 
                            Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Imperdiet massa tincidunt nunc pulvinar. 
                            Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Sit amet justo donec enim. Porta lorem mollis aliquam ut porttitor leo. Egestas diam in arcu cursus.
                        </p>
                    </div>
        )
    }
}

export default About;