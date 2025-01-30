import '../../scss/LandingPage/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-footer">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        <span className="border">|</span>
        <p>Metalog</p>
      </div>
    </footer>
  );
};

export default Footer;
