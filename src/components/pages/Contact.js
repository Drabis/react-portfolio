import React from "react";
// import resume from "../../assets/";

function Contact(props) {
  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="card mt-5">
            <article className="card-body about-me">
              <h1 className="card-title">Contact</h1>
              <hr />
              <div className="list-group">
                {/* <a
                  href="tel:+13475748374"
                  className="list-group-item list-group-item-action"
                >
                  Phone<i className="fa fa-phone" aria-hidden="true"></i>
                </a> */}
                <a
                  href="mailto:drabo.aboulaye88@gmail.com"
                  className="list-group-item list-group-item-action"
                >
                  E-mail<i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/Drabis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-group-item list-group-item-action"
                >
                  GitHub<i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/aboulaye-drabo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-group-item list-group-item-action"
                >
                  LinkedIn
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>

                {/* <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-group-item list-group-item-action"
                >
                  Resume<i className="fa fa-file-text" aria-hidden="true"></i>
                </a> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
