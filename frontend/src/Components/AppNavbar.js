import React, { Fragment, useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Container,
} from "reactstrap";

const AppNavbar = ({ auth }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => setIsOpen(!isOpen);

	const authLinks = (
		<Fragment>
			<NavItem>
				<span className='navbar-text mr-3'>
					<strong>
						{auth && auth.user ? `Welcome ${auth.user.name}` : ""}
					</strong>
				</span>
			</NavItem>
			<NavItem></NavItem>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<NavItem></NavItem>
			<NavItem></NavItem>
		</Fragment>
	);

	return (
		<div>
			<Navbar color='dark' dark expand='sm' className='mb-5'>
				<Container>
					<NavbarBrand href='/'>ShoppingList</NavbarBrand>
					<NavbarToggler onClick={handleToggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className='ml-auto' navbar>
							{auth && auth.isAuthenticated ? authLinks : guestLinks}
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default AppNavbar;
