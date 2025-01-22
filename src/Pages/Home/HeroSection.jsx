import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


export default function HeroSection() {
  const phoneNumber = "9119650050"; // Specify the phone number

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Welcome, We're</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Akshya Women Care</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            We provide Best IVF Consultant & Treatment.
            {/* <br /> Dolorum, quas. Amet soluta assumenda cum? */}
          </p>
        </div>

        {/* <button className="btn btn-primary">Get In Touch</button> */}
        <button className="btn btn-primary" onClick={handleClick}>
        <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;Get In Touch
        </button>

      </div>
      <div className="hero--section--img">
        <img src="./img/heroImage2.png" alt="Hero Section" id="heroImage"/>
        {/* <img src="./img/hero_img.png" alt="Hero Section" /> */}
      </div>
    </section>
  );
}
