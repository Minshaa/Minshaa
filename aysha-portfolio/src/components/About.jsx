function About() {
  return (
    <section id="about" className="py-5">
      <div className="container text-center">

        <h2>About Me</h2>

        <p className="lead mt-3">
          I am a MERN Stack Developer with strong interest in building scalable
          and responsive web applications. I enjoy solving real-world problems
          through code.
        </p>

        <div className="mt-3">

          <a href="https://www.linkedin.com/in/aysha-minsha-p" target="_blank" className="btn btn-primary me-2">
            LinkedIn
          </a>

          <a href="https://github.com/yourgithub" target="_blank" className="btn btn-dark">
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;