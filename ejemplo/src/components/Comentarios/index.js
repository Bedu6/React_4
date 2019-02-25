import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-materialize';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comentarios: []
		}
	}

	async componentDidMount() {
		// axios.get('https://jsonplaceholder.typicode.com/commentsi')
		// 	.then((response) => {
		// 		this.setState({
		// 			comentarios: response.data
		// 		})
		// 	})
		// 	.catch((error) => {
		// 		alert(error.message);
		// 	})

		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
			this.setState({
				comentarios: response.data
			});
		}
		catch(error) {
				alert(error.message);
		}
	}

	desplegar = () => (
		this.state.comentarios.map((comentario, key) => (
			<tr>
			  <td>{ comentario.email }</td>
			  <td>{ comentario.body }</td>
			</tr>
		))
	);

	render() {
		return (
			<div>
				<Table hoverable>
				  <thead>
				    <tr>
				      <th>Email</th>
				      <th>Contenido</th>
				    </tr>
				  </thead>

				  <tbody>
				    { this.desplegar() }
				  </tbody>
				</Table>
			</div>
		);
	}
}

export default index;