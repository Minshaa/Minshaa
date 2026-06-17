import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_v3om6s5",
      "template_yvs6mzm",
      form.current,
      "5XL1MxJL9r31131ez"
    ).then(() => {
      alert("Message sent!");
      form.current.reset();
    });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container text-center">

        <h2>Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="mt-4">

          <input name="user_name" className="form-control mb-2" placeholder="Name" />
          <input name="user_email" className="form-control mb-2" placeholder="Email" />
          <textarea name="message" className="form-control mb-2" placeholder="Message" />

          <button className="btn btn-primary w-100">Send</button>

        </form>

      </div>
    </section>
  );
}

export default Contact;