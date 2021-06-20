import React from "react";
// import { abou } from "../../assets/images/abou.jpg";

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
                  <img src="../../assets/images/abou.jpg" alt="abou" />
                </div>
                <p className="card-text">
                   Hey all! I'm Aboulaye Drabo from the Ivory Coast where
                  the music is always great and the food is always good, I'm a
                  native french speaker. I am a full-stack web developer with a
                  focus on the Front End. I'm excited to utilize technology to
                  foster growth, development, and progress. I'm passionate about
                  helping others and I believe technology has a great impact on
                  everyday lives. <br />
                  Skills: HTML3, CSS3, jQuery, Gatsby, Bootstrap, , JavaScript,
                  Express.js, Handlebars, Node.js, MongoDB, MySQL, React.js and
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
