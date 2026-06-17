function Projects() {
  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">
          Projects
        </h2>

        <div className="row">

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h4>TravelEase</h4>

                <p>
                  Responsive travel booking website
                  using HTML, CSS, JavaScript and
                  Bootstrap.
                </p>

                <ul>
                  <li>Tour Packages</li>
                  <li>Gallery</li>
                  <li>EmailJS Contact Form</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h4>
                  Wild Animal Intrusion Detection
                </h4>

                <p>
                  Raspberry Pi based system for
                  detecting animal movement and
                  notifying users.
                </p>

                <ul>
                  <li>PIR Sensor</li>
                  <li>Camera Integration</li>
                  <li>Android Notification</li>
                  <li>Deterrent Light</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;