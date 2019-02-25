import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

const Menu = (props) => (
	<div>
		<Navbar left>
		  <NavItem>
		  	<Link to='/'>
		  		Comentarios
		  	</Link>
		  </NavItem>
		  <NavItem href='components.html'>Components</NavItem>
		</Navbar>
	</div>
);

export default Menu;