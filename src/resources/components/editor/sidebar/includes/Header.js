import { NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <NavDropdown className="font-weight-bold sidebarHeader" title={(
      <span>
        Ethan's Website
      </span>
    )} id="basic-nav-dropdown">
      <NavDropdown.Header>Project</NavDropdown.Header>
      <NavDropdown.Item href="#action/3.2">Download</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Dashboard</NavDropdown.Item>
    </NavDropdown>
  );
}

export default Header;
