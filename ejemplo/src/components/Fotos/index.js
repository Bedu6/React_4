import React, { Component } from 'react';
import { Col, Card, CardTitle } from 'react-materialize';
import axios from 'axios';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fotos: []
		}
	}

	async componentDidMount() {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');
			this.setState({
				fotos: response.data
			});
		}
		catch(error) {
			alert(error.message);
		}
	}

	desplegar = () => (
		this.state.fotos.map((elemento, key) => (
			<Col s={12} l={6} key={key}>
				<Card
					horizontal
					header={
						<CardTitle image={ elemento.url }></CardTitle>
					}
				>
					<p>{ elemento.title }</p>
				</Card>
			</Col>
		))
	);

	render() {
		return (
			<div className='row'>
				{ this.desplegar() }
			</div>
		);
	}
}

export default index;