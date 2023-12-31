import { block } from "million";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container className="headerContainer">
        <Navbar.Brand href="#" className="logoText">
          Astronomy - Photo of the Day
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
const HeaderBlock = block(Header);

export default HeaderBlock;
