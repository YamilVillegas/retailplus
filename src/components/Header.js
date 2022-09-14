import { Navbar, NavbarBrand } from "reactstrap";
import RetailplusLogo from '../app/assets/img/retailpluslogo.png'

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
          <NavbarBrand>
            <img src={RetailplusLogo} alt='Retailpluslogo' />
          </NavbarBrand>
        </Navbar>
    )
}

export default Header