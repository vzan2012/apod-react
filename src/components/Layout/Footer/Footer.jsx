import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <Navbar expand="lg" bg="dark" className="footerNavbar">
      <Container className="footerContainer">
        <Navbar.Brand href="#" className="logoText">
          &copy; Copyrights NASA - {getCurrentYear}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
