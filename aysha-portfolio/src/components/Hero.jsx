import profile from "../assets/Profile.png";

function Hero() {
  return (
    <section id="home" className="bg-dark text-white d-flex align-items-center" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-7 text-center text-md-start">

            <h1 className="display-4 fw-bold">Aysha Minsha</h1>

            <h3 className="text-info">Full Stack Developer (MERN)</h3>

            <p className="lead mt-3">
              B.Sc Computer Science Graduate with MERN Internship experience.
              Passionate about building responsive web apps.
            </p>

            <a href="/Resume.pdf" className="btn btn-primary btn-lg me-3">
              Download Resume
            </a>

            <a href="#projects" className="btn btn-outline-light btn-lg">
              View Projects
            </a>

          </div>

          <div className="col-md-5 text-center mt-4 mt-md-0">
            <img src={profile} className="rounded-circle shadow" width="280" height="280" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;