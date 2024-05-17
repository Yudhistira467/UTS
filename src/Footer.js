import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div id='Contact' className="footer">
          <h3>Resevasi</h3>
          <p>Email: naufalferdian99@gmail.com</p>
          <p>Phone: 08522361127</p>
          <p>Address: Kedawung, Cirebon</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/example"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="https://twitter.com/example"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="https://www.instagram.com/example"><i className="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>
        <div className="map">
          <h3>Lokasi</h3>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2949788047717!2d106.78064631431724!3d-6.224051995476392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02d4087b5d0b%3A0x4b20e2268b5d78da!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1632187598483!5m2!1sen!2sid"
            width="300"
            height=""
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Kelompok 3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
