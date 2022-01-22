import react from "react";
import "./Footer.scss";
import { Link  } from "react-router-dom";

class Footer extends react.Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="footer_links">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">Classroom Project </li>
                <Link to={`Contactus`}className="footer__contact_btn footer__item">Contact us</Link>
                <li className="footer__item">Tutors</li>
                <li className="footer__item">Privacy policy</li>
                <li className="footer__item">Terms</li>
              </ul>
            </div>
          </div>
          <div className="footer_copyright">
            <p className="footer__copyright">
              Copyright
              &copy; by Asfan, Gowtham, Koushik.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;