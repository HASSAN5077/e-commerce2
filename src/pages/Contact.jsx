import React from "react";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <>
      <section className="info-container">
        <div className="box-container">
          <div className="box">
            <i className="fas fa-map"></i>
            <h2>address</h2>
            <p>lahore, pakistan - 5400</p>
          </div>
          <div className="box">
            <i className="fas fa-envelope"></i>
            <h2>address</h2>
            <p>lahore, pakistan - 5400</p>
          </div>
          <div className="box">
            <i className="fas fa-phone"></i>
            <h2>address</h2>
            <p>lahore, pakistan - 5400</p>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="box-container">
          <form action="">
            <h3>get in touch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              provident nihil non unde, quia magnam quibusdam ad obcaecati nam
              animi?
            </p>
            <div className="inputBox">
              <input type="text" placeholder="your name" />
              <input type="email" placeholder="your email" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="your number" />
              <input type="text" placeholder="subject" />
            </div>
            <textarea
              name=""
              placeholder="your message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="send message" className="btn" />
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108856.60593541243!2d74.35867049865115!3d31.503034488767984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1642831634126!5m2!1sen!2s"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <NewsLetter />
    </>
  );
};

export default Contact;
