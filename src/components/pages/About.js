import React from "react";
import Image from "../../assets/images/abou.jpg";

function About() {
  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <div className="card mt-5">
            <article className="card-body">
              <h1 className="card-title">About Me</h1>
              <hr />
              <div className="content about-me">
                <div>
                  <img src={Image} alt=""/>
                  {/* <img src={process.env.PUBLIC_URL + '/assets/images/abou.jpg'} alt="" /> */}
                </div>
                <p className="card-text">
                   Hey all! I'm Aboulaye Drabo from the Ivory Coast where
                  the music is always great and the food is always good, I'm a
                  native french speaker. I graduated from Columbia University Coding Bootcamp where I learned to build a responsive full-stack web Applications using the lastest technology.
                   I'm excited to utilize technology to
                  foster growth, development, and progress in this new world. I'm passionate about
                  helping others and I believe technology has a great impact on our
                  everyday lives. <br />
                  <b>Skills:</b> 
                  HTML5, CSS, JavaScript, Java
                  Express.js, MongoDB, MySQL, Spring framworks, React.js, React Native and
                  API Interaction.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
