import React from "react";
import "./About1.css";

const About1=()=>{
    return(
        <div className="about">
            <div className="intro">
                <h1>About Us</h1>
                <p><strong>Lorem Ipsum </strong>is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="imagee"></div>            
            {/* <div className="col-lg-6 col-12 leff">

            </div>
            <div className="col-lg-6 col-12 rigg">
                
            </div> */}
        </div>

    );
};

export default About1;